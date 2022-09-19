import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { PathMatch, useLocation, useMatch } from "react-router-dom";
import * as S from "./Style";
import { findMovies, getClipDetails, getDetail, getRecommend, IGetMoviesResult } from "../Api/api";
import Banner from "../Components/Banner/Banner";
import Slider from "../Components/Slider/Slider";
import Modal from "../Components/Modal/Modal";

function Search() {
    const location = useLocation(); // navigate는 url을 이동시킨다.
    const keyword = new URLSearchParams(location.search).get("keyword"); // key는 url의 파라미터를 가져온다.
    const { data: movies, isLoading: isMovieLoading } =
        useQuery<IGetMoviesResult>([keyword, "movie"], () => findMovies(keyword));
    const { data: tv, isLoading: isTvLoading } =
        useQuery<IGetMoviesResult>([keyword, "tv"], () => findMovies(keyword));
    const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
    const id = bigMovieMatch?.params.id;
    const part = bigMovieMatch?.params.part;
    const { data: detail } =
        useQuery(["movie", id], () => getDetail(part, id));
    const { data: movieClips } =
        useQuery(["clips", id], () => getClipDetails(part, id));
    const { data: credits } =
        useQuery(["credits", id], () => getDetail(part, id));
    const { data: recomendations } =
        useQuery(["recommend", id], () => getRecommend(part, id));
    const clips = movieClips?.results?.reverse().slice(0, 3);
    const isLoading = isMovieLoading || isTvLoading || false;
    return (
        <S.Wrapper>
            {isLoading ? null : (
                <>
                    <S.SliderWrapper>
                        <S.Wrap>
                            <S.TitleWrap><S.Title>Movie</S.Title></S.TitleWrap>
                            <Slider
                                id="searchMovie"
                                movies={movies?.results ?? []}
                                title="Search Movie"
                                query="searchMovie"
                                part="movie"
                            ></Slider>
                            <Slider
                                id="searchTv"
                                movies={tv?.results ?? []}
                                title="Search Tv"
                                query="searchTv"
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
    );
}

export default Search;