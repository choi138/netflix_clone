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
    /* Movies*/
    getNowPlayingMovies,
    getPopularMovies,
    getUpcomingMovies,
    getTopRatedMovies,
    getMovieCredits,

} from "../../Api/api";

/**Components */
import Banner from "../../Components/Banner/Banner";
import Slider from "../../Components/Slider/Slider";
import Modal from "../../Components/Modal/Modal";

import { Link } from "react-router-dom";
import * as S from "../Style";
import { useEffect, useState } from "react";



function Movie() {

    // const location = useLocation() // 현재 url의 path를 가져온다.
    // const {part,id} = useParams<"part"|"id">() // useParams는 url의 파라미터를 가져온다.

    const navigate = useNavigate();
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");

    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;
    //Tv
    // 현재 방영중인 Tv
    const { data: playingMovie, isLoading: getNowPlayingMoviesLoading } = // tvAiring는 getTvAiring의 data를 받아온다.
        useQuery<IGetMoviesResult>(["playingMovie", "movie"], getNowPlayingMovies);
    // 인기 Tv
    const { data: popularMovies, isLoading: getPopularMoviesLoading } = // tvPopular는 getTvPopular의 data를 받아온다.
        useQuery<IGetMoviesResult>(["popularMovies", "movie"], getPopularMovies);
    // 인기 Tv
    const { data: upcomingMovies, isLoading: getUpcomingMoviesLoading } = // tvTopRated는 getTvTopRated의 data를 받아온다.
        useQuery<IGetMoviesResult>(["upcomingMovies", "movie"], getUpcomingMovies);

    const { data: topRatedMovie, isLoading: getTopRatedMoviesLoading } =
        useQuery<IGetMoviesResult>(["topRatedMovie", "movie"], getTopRatedMovies);

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
    const isLoading = getNowPlayingMoviesLoading || getPopularMoviesLoading || getTopRatedMoviesLoading || false;
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
                        part="movie"
                        movies={popularMovies?.results}></Banner>
                    <S.SliderWrapper>
                        <S.Wrap>
                            <S.TitleWrap><S.Title>Movie</S.Title></S.TitleWrap>
                            <Slider
                                id="playingMovie"
                                movies={playingMovie?.results ?? []}
                                title="Now Playing"
                                query="Now Playing"
                                part="movie"
                            ></Slider>
                            <Slider
                                id="upcomingMovies"
                                movies={upcomingMovies?.results ?? []}
                                title="Up Coming"
                                query="Up Coming"
                                part="movie"
                            ></Slider>
                            <Slider
                                id="popularMovies"
                                movies={popularMovies?.results ?? []}
                                title="Popular"
                                query="Popular"
                                part="movie"
                            ></Slider>
                            <Slider
                                id="topRatedMovie"
                                movies={topRatedMovie?.results ?? []}
                                title="Top Rated"
                                query="Top Rated"
                                part="movie"
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
export default Movie;
