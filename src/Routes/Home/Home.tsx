/**Page Title */
import { Helmet } from "react-helmet"; // Helmet은 웹사이트의 title을 바꿔주는 역할을 한다.
/* To get data */
import { useQuery } from "react-query"; 
import { PathMatch, useLocation, useMatch, useNavigate, useParams } from "react-router-dom"; // useMatch는 현재 url의 path를 가져온다.
import { 
  IGetMoviesResult,
  getDetail,
  getClipDetails,
  getRecommend,
  /* Movies*/
  getNowPlayingMovies,
  getPopularMovies,
  getUpcomingMovies,
  /* Tv */
  getTvAiring,
  getTvTopRated,
  getTvPopular,

 } from "../../Api/api";

/**Components */
import Banner from "../../Components/Banner/Banner";
import Slider from "../../Components/Slider/Slider";
import Modal from "../../Components/Modal/Modal";

import {Link} from "react-router-dom";
import * as S from "./HomeStyle";
import { useEffect, useState } from "react";



function Home(){

  // const location = useLocation() // 현재 url의 path를 가져온다.
  // const {part,id} = useParams<"part"|"id">() // useParams는 url의 파라미터를 가져온다.

  const navigate = useNavigate();
  const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
  
  const id = bigMovieMatch?.params.id;
  const part = bigMovieMatch?.params.part;

  // 영화
  // 현재 상영중인 영화
  const { data: nowPlayingMovies, isLoading: playingLoading } = // nowPlayingMovies는 getNowPlayingMovies의 data를 받아온다.
  useQuery<IGetMoviesResult>(["nowPlaying", "movie"], getNowPlayingMovies); 
  // 인기 영화
  const { data: topRatedMovies, isLoading: topRatedLoading } = // topRatedMovies는 getTopRatedMovies의 data를 받아온다.
  useQuery<IGetMoviesResult>(["topRated", "movie"], getPopularMovies);
  // 개봉 예정 영화
  const { data: upcomingMovies, isLoading: upcomingLoading } = // upcomingMovies는 getUpcomingMovies의 data를 받아온다.
  useQuery<IGetMoviesResult>(["upcoming", "movie"], getUpcomingMovies);

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

  const {data: detail} = useQuery(["movie", id], () => // movieDetail은 getDetail의 data를 받아온다.
  getDetail(part,  id || "") 
  );
  const {data: getClips} = useQuery(["clips", id], () => // movieClip은 getClip의 data를 받아온다.
  getClipDetails(part,id || "")
  );
  const {data: recomendations} = useQuery(["movie", id], () => // movieRecommend은 getRecommend의 data를 받아온다.
  getRecommend(part, id || "")
  );
  const clips = getClips?.results?.slice(-3).reverse(); // clips는 movieClip의 results의 0번째부터 1번째까지의 데이터를 가져온다.
  const isLoading = playingLoading || topRatedLoading || upcomingLoading || tvAiringLoading || tvPopularLoading || tvTopRatedLoading; 
  // isLoading은 현재 상영중인 영화, 인기 영화, 개봉 예정 영화, 현재 방영중인 Tv, 인기 Tv가 모두 로딩이 끝나야 false가 된다.

  return(
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
          movies={nowPlayingMovies?.results}></Banner>
          <S.SliderWrapper>
            <S.Wrap>
              <S.Title>Movie</S.Title>
            <Slider
            id="nowPlayingData"
            movies={nowPlayingMovies?.results ?? []}
            title="Now Playing(movie)"
            query="nowPlayingMovies"
            part="movie"
            ></Slider>
            <Slider
            id="nowPlayingData"
            movies={topRatedMovies?.results ?? []}
            title="Now TOP 10(movie)"
            query="topRatedMovies"
            part="movie"
            ></Slider>
            <Slider
            id="nowPlayingData"
            movies={upcomingMovies?.results ?? []}
            title="UP Comming(movie)"
            query="upcomingMovies"
            part="movie"
            ></Slider>
            </S.Wrap>

            <S.TvWrap>
            <S.Title>TV</S.Title>
            <Slider
            id="nowPlayingData"
            movies={tvAiring?.results ?? []}
            title="Airing(tv)"
            query="tvAiring"
            part="tv"
            ></Slider>
            <Slider
            id="nowPlayingData"
            movies={tvPopular?.results ?? []}
            title="Now TOP 10(tv)"
            query="tvPopular"
            part="tv"
            ></Slider>
            <Slider
            id="nowPlayingData"
            movies={tvTopRated?.results ?? []}
            title="TOP Rated(tv)"
            query="tvTopRated"
            part="tv"
            ></Slider>
            </S.TvWrap>
          </S.SliderWrapper>
        </>
        )}
        <Modal
          movieDetail={detail ?? []} 
          movieClips={clips ?? []}
          movieRecomendations={recomendations ?? []}
        >
        </Modal>
    </S.Wrapper>
  )
  }
  export default Home;
