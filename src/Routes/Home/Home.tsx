// /**Page Title */
// import { Helmet } from "react-helmet"; // Helmet은 웹사이트의 title을 바꿔주는 역할을 한다.
// /* To get data */
// import { useQuery } from "react-query"; 
// import { PathMatch, useLocation, useMatch, useNavigate, useParams } from "react-router-dom"; // useMatch는 현재 url의 path를 가져온다.
// import { 
//   IGetMoviesResult,
//   getDetail,
//   getClipDetails,
//   getRecommend,
//   /* Movies*/
//   getNowPlayingMovies,
//   getPopularMovies,
//   getUpcomingMovies,
//   /* Tv */
//   getTvAiring,
//   getTvTopRated,
//   getTvPopular,

//  } from "../../Api/api";

// /**Components */
// import Banner from "../../Components/Banner/Banner";
// import Slider from "../../Components/Slider/Slider";
// import TopSlider from "../../Components/Slider/TopSlider";
// import Modal from "../../Components/Modal/Modal";

// import {Link} from "react-router-dom";
// import * as S from "./HomeStyle";
// import { useEffect, useState } from "react";



// function Home(){

//   // const location = useLocation() // 현재 url의 path를 가져온다.
//   // const {part,id} = useParams<"part"|"id">() // useParams는 url의 파라미터를 가져온다.

//   const navigate = useNavigate();
//   const bigMovieMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
//   const id = {bigMovieMatch.params.movieId};
//   const part = {bigMovieMatch.params.part};
//   // 영화
//   // 현재 상영중인 영화
//   const { data: nowPlayingMovies, isLoading: playingLoading } = // nowPlayingMovies는 getNowPlayingMovies의 data를 받아온다.
//   useQuery<IGetMoviesResult>(["nowPlaying", "movie"], getNowPlayingMovies); 
//   // 인기 영화
//   const { data: topRatedMovies, isLoading: topRatedLoading } = // topRatedMovies는 getTopRatedMovies의 data를 받아온다.
//   useQuery<IGetMoviesResult>(["topRated", "movie"], getPopularMovies);
//   // 개봉 예정 영화
//   const { data: upcomingMovies, isLoading: upcomingLoading } = // upcomingMovies는 getUpcomingMovies의 data를 받아온다.
//   useQuery<IGetMoviesResult>(["upcoming", "movie"], getUpcomingMovies);

//   //Tv
//   // 현재 방영중인 Tv
//   const { data: tvAiring, isLoading: tvAiringLoading } = // tvAiring는 getTvAiring의 data를 받아온다.
//   useQuery<IGetMoviesResult>(["tvAiring", "tv"], getTvAiring);
//   // 인기 Tv
//   const { data: tvPopular, isLoading: tvPopularLoading } = // tvPopular는 getTvPopular의 data를 받아온다.
//   useQuery<IGetMoviesResult>(["tvPopular", "tv"], getTvPopular);
//   // 인기 Tv
//   const { data: tvTopRated, isLoading: tvTopRatedLoading } = // tvTopRated는 getTvTopRated의 data를 받아온다.
//   useQuery<IGetMoviesResult>(["tvTopRated", "tv"], getTvTopRated);

//   const {data: detail} = useQuery(["movie", id], () => // movieDetail은 getDetail의 data를 받아온다.
//   getDetail(part, parseInt(id || "")) 
//   );
//   const {data: getClips} = useQuery(["movie", id], () => // movieClip은 getClip의 data를 받아온다.
//   getClipDetails(part, parseInt(id || ""))
//   );
//   const {data: recomendations} = useQuery(["movie", id], () => // movieRecommend은 getRecommend의 data를 받아온다.
//   getRecommend(part, parseInt(id || ""))
//   );
//   const clips = getClips?.results?.slice(-3).reverse(); // clips는 movieClip의 results의 0번째부터 1번째까지의 데이터를 가져온다.
//   const isLoading = playingLoading || topRatedLoading || upcomingLoading || tvAiringLoading || tvPopularLoading || tvTopRatedLoading; 
//   // isLoading은 현재 상영중인 영화, 인기 영화, 개봉 예정 영화, 현재 방영중인 Tv, 인기 Tv가 모두 로딩이 끝나야 false가 된다.

  // return(
  //   <S.Wrapper>
  //     <Helmet>
  //       <title>Clone BIFiLX</title> 
  //     </Helmet>
  //     {isLoading ? (
  //       <S.Loader>Loading...</S.Loader>
  //     ) : (
  //       <>
  //         <Banner
  //         id="banner"
  //         part="movie"
  //         movies={nowPlayingMovies?.results}></Banner>
  //         <S.SliderWrapper>
  //           <Slider
  //           id="nowPlayingData"
  //           movies={nowPlayingMovies?.results ?? []}
  //           title="Now Playing(movie)"
  //           query="nowPlayingMovies"
  //           part="movie"
  //           ></Slider>
  //           <Slider
  //           id="nowPlayingData"
  //           movies={topRatedMovies?.results ?? []}
  //           title="Now TOP 10(movie)"
  //           query="topRatedMovies"
  //           part="movie"
  //           ></Slider>
  //           <Slider
  //           id="nowPlayingData"
  //           movies={upcomingMovies?.results ?? []}
  //           title="UP Comming(movie)"
  //           query="upcomingMovies"
  //           part="movie"
  //           ></Slider>
  //           <Slider
  //           id="nowPlayingData"
  //           movies={tvAiring?.results ?? []}
  //           title="Airing(tv)"
  //           query="tvAiring"
  //           part="tv"
  //           ></Slider>
  //           <Slider
  //           id="nowPlayingData"
  //           movies={tvPopular?.results ?? []}
  //           title="Now TOP 10(tv)"
  //           query="tvPopular"
  //           part="tv"
  //           ></Slider>
  //           <Slider
  //           id="nowPlayingData"
  //           movies={tvTopRated?.results ?? []}
  //           title="TOP Rated(tv)"
  //           query="tvTopRated"
  //           part="tv"
  //           ></Slider>
  //         </S.SliderWrapper>
  //       </>
  //       )}
  //       <Modal
  //         movieDetails={detail ?? []}
  //       >
  //       </Modal>
  //   </S.Wrapper>
  // )
  // }
  // export default Home;

  import { useQuery } from "react-query";
  import styled from "styled-components";
  import { motion, AnimatePresence } from "framer-motion";
  import { getNowPlayingMovies, IGetMoviesResult } from "../../Api/api";
  import { makeImagePath } from "../../Api/utils";
  import { useState } from "react";
  import * as S from "./HomeStyle";
  
  const rowVariants = {
    hidden: {
      x: window.outerWidth + 5,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth - 5,
    },
  };
  const boxVariants = {
    normal: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      y: -80,
      transition: {
        delay: 0.5,
        duaration: 0.1,
        type: "tween",
      },
    },
  };
  
  const infoVariants = {
    hover: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duaration: 0.3,
        type: "tween",
      },
    },
  };
  const offset = 6;
  function Home() {
    const { data, isLoading } = useQuery<IGetMoviesResult>(
      ["movies", "nowPlaying"],
      getNowPlayingMovies
    );
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const incraseIndex = () => {
      if (data) {
        if (leaving) return;
        toggleLeaving();
        const totalMovies = data.results.length - 1;
        const maxIndex = Math.floor(totalMovies / offset) - 1;
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
      }
    };
    const toggleLeaving = () => setLeaving((prev) => !prev);
    return (
      <S.Wrapper>
        {isLoading ? (
          <S.Loader>Loading...</S.Loader>
        ) : (
          <>
            <S.Banner
              onClick={incraseIndex}
              bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
            >
              <S.Title>{data?.results[0].title}</S.Title>
              <S.Overview>{data?.results[0].overview}</S.Overview>
            </S.Banner>
            <S.Slider>
              <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                <S.Row
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: "tween", duration: 1 }}
                  key={index}
                >
                  {data?.results
                    .slice(1)
                    .slice(offset * index, offset * index + offset)
                    .map((movie) => (
                      <S.Box
                        key={movie.id}
                        whileHover="hover"
                        initial="normal"
                        variants={boxVariants}
                        transition={{ type: "tween" }}
                        bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                      >
                        <S.Info variants={infoVariants}>
                          <h4>{movie.title}</h4>
                        </S.Info>
                      </S.Box>
                    ))}
                </S.Row>
              </AnimatePresence>
            </S.Slider>
          </>
        )}
      </S.Wrapper>
    );
  }
  export default Home;