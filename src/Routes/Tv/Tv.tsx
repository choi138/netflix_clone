/**Page Title */
import { Helmet } from "react-helmet"; // Helmet은 웹사이트의 title을 바꿔주는 역할을 한다.
/* To get data */
import { useQuery } from "react-query";
import { PathMatch, useLocation, useMatch, useNavigate, useParams } from "react-router-dom"; // useMatch는 현재 url의 path를 가져온다.
import {
    IMovieCredits,
    IGetMoviesResult,
    getDetail,
    getClipDetails,
    getRecommend,
    /* Tv */
    getTvAiring,
    getTvTopRated,
    getTvPopular,
    getMovieCredits,
    getTvToday,

} from "../../Api/api";

/**Components */
import Banner from "../../Components/Banner/Banner";
import Slider from "../../Components/Slider/Slider";
import Modal from "../../Components/Modal/Modal";

import { Link } from "react-router-dom";
import * as S from "../Style";
import { useEffect, useState } from "react";



function TV() {

    // const location = useLocation() // 현재 url의 path를 가져온다.
    // const {part,id} = useParams<"part"|"id">() // useParams는 url의 파라미터를 가져온다.

    const navigate = useNavigate();
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");

    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;
    //Tv
    // 현재 방영중인 Tv
    const { data: tvAiring, isLoading: tvAiringLoading } = // tvAiring는 getTvAiring의 data를 받아온다.
        useQuery<IGetMoviesResult>(["tvAiring", "tv"], getTvAiring);
    // 인기 Tv
    const { data: tvPopular, isLoading: tvPopularLoading } = // tvPopular는 getTvPopular의 data를 받아온다.
        useQuery<IGetMoviesResult>(["tvPopular", "tv"], getTvPopular);
    // 인기 Tv
    const { data: tvTopRated, isLoading: tvTopRatedLoading } = // tvTopRated는 getTvTopRated의 data를 받아온다.
        useQuery<IGetMoviesResult>(["tvTopRated", "tv"], getTvTopRated);

    const { data: tvToday, isLoading: getTvTodayLoading } =
        useQuery<IGetMoviesResult>(["getTvToday", "tv"], getTvToday);

    const { data: detail } = useQuery(["movie", id], () => // movieDetail은 getDetail의 data를 받아온다.
        getDetail(part, id || "")
    );
    const { data: getClips } = useQuery(["clips", id], () => // movieClip은 getClip의 data를 받아온다.
        getClipDetails(part, id || "")
    );
    const { data: recomendations } = useQuery(["movieRecommend", id], () => // movieRecommend은 getRecommend의 data를 받아온다.
        getRecommend(part, id || "")
    );
    const { data: credits } = useQuery<IMovieCredits>(["credits", id], () => // movieRecommend은 getRecommend의 data를 받아온다.
        getMovieCredits(part, id || "")
    );
    const clips = getClips?.results?.slice(-3).reverse(); // clips는 movieClip의 results의 0번째부터 1번째까지의 데이터를 가져온다.
    const isLoading = tvAiringLoading || tvPopularLoading || tvTopRatedLoading || false;
    // isLoading은 현재 상영중인 영화, 인기 영화, 개봉 예정 영화, 현재 방영중인 Tv, 인기 Tv가 모두 로딩이 끝나야 false가 된다.

    return (
        <S.Wrapper>
            <Helmet>
                <title>Clone BIFiLX</title>
            </Helmet>
            {isLoading ? (
                <S.Loader>Loading...</S.Loader>
            ) : (
                <>
                    <Banner
                        id="banner"
                        part="tv"
                        movies={tvPopular?.results}></Banner>
                    <S.SliderWrapper>
                        <S.Wrap>
                            <S.TitleWrap><S.Title>Tv</S.Title></S.TitleWrap>
                            <Slider
                                id="tvAiring"
                                movies={tvAiring?.results ?? []}
                                title="Tv Airing"
                                query="tvAiring"
                                part="tv"
                            ></Slider>
                            <Slider
                                id="tvPopular"
                                movies={tvPopular?.results ?? []}
                                title="Tv Popular"
                                query="tvPopular"
                                part="tv"
                            ></Slider>
                            <Slider
                                id="tvToday"
                                movies={tvToday?.results ?? []}
                                title="Tv Today"
                                query="tvToday"
                                part="tv"
                            ></Slider>
                            <Slider
                                id="tvTopRated"
                                movies={tvTopRated?.results ?? []}
                                title="Tv Rated"
                                query="tvTopRated"
                                part="tv"
                            ></Slider>

                        </S.Wrap>
                    </S.SliderWrapper>
                </>
            )}
            <Modal
                movieDetail={detail ?? []} // movieDetail은 getDetail의 data를 받아온다.
                movieClips={clips ?? []} // movieClips은 getClip의 data를 받아온다.
                movieCredits={credits?.cast ?? []} // movieCredits은 getMovieCredits의 data를 받아온다.
                movieRecomendations={recomendations ?? []}
            >
            </Modal>
        </S.Wrapper>
    )
}
export default TV;
