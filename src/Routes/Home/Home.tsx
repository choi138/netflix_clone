/**Page Title */
import { Helmet } from "react-helmet"; // Helmet은 웹사이트의 title을 바꿔주는 역할을 한다.
/* To get data */
import { useQuery } from "react-query"; 
import { useLocation, useMatch, useParams } from "react-router-dom"; // useMatch는 현재 url의 path를 가져온다.
import { 
  IGetMoviesResult,
  getDetail,
  getClipDetails,
  getRecommend,
  /* Movies*/
  getNowPlayingMovies,
  getTopRatedMovies,
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
import { useEffect } from "react";


function Home(){

  const location = useLocation()
  const {part,id} = useParams<"part"|"id">()

  // 영화
  // 현재 상영중인 영화
  const { data: nowPlayingMovies, isLoading: playingLoading } = // nowPlayingMovies는 getNowPlayingMovies의 data를 받아온다.
  useQuery<IGetMoviesResult>(["nowPlaying", "movie"], getNowPlayingMovies); 
  // 인기 영화
  const { data: topRatedMovies, isLoading: topRatedLoading } = // topRatedMovies는 getTopRatedMovies의 data를 받아온다.
  useQuery<IGetMoviesResult>(["topRated", "movie"], getTopRatedMovies);
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
  getDetail(part, parseInt(id || "")) 
  );
  const {data: getClips} = useQuery(["movie", id], () => // movieClip은 getClip의 data를 받아온다.
  getClipDetails(part, parseInt(id || ""))
  );
  const {data: recomendations} = useQuery(["movie", id], () => // movieRecommend은 getRecommend의 data를 받아온다.
  getRecommend(part, parseInt(id || ""))
  );
  const clips = getClips?.results?.slice(0, 1); // clips는 movieClip의 results의 0번째부터 1번째까지의 데이터를 가져온다.
  const isLoading = playingLoading || topRatedLoading || upcomingLoading || tvAiringLoading || tvPopularLoading || tvTopRatedLoading; 
  // isLoading은 현재 상영중인 영화, 인기 영화, 개봉 예정 영화, 현재 방영중인 Tv, 인기 Tv가 모두 로딩이 끝나야 false가 된다.

  return(
    <S.Wrapper>
      <Helmet>
        <title>Home</title> 
      </Helmet>
      {isLoading ? (
      ) : (null)}
    </S.Wrapper>
  )
  }
  export default Home;

// import { makeImagePath } from "../../Api/utilities"; 
// import * as S from "./HomeStyle";
// import { AnimatePresence } from "framer-motion";
// import { useState } from "react";
// // AnimatePresence는 컴포넌트가 render되거나 destory될때 효과를 줄 수 있다.

  // const rowVariants = {
  //   hidden: {
  //     x: window.innerWidth + 10, // x축으로 window의 너비만큼 이동한다.
  //   },
  //   visibal: {
  //     x: 0,
  //   },
  //   exit: {
  //     x: -window.innerWidth -10,
  //   },
  // }
  
  // const offset = 6;
  
  // const boxVariants = {
  //   normal: {
  //     scale: 1,
  //   },
  //   hover: {
  //     scale: 1.3,
  //     y:-50,
  //     transition: { 
  //       delay: 0.5, // 0.5초 뒤에 실행된다.
  //       duaration: 0.3, // 0.3초 동안 실행된다.
  //       type: "tween", // tween은 애니메이션의 종류를 의미한다.
  //     },
  //   },
  // };
  
  // const infoVariants = {
  //   hover: {
  //     opacity: 1,
  //     transition: { 
  //       delay: 0.5, // 0.5초 뒤에 실행된다.
  //       duaration: 0.3, // 0.3초 동안 실행된다.
  //       type: "tween", // tween은 애니메이션의 종류를 의미한다.
  //     },
  //   },
  // }

// <Link to="" />; // 이렇게 입력시 현재 페이지로 이동
  // <Link to="about"/>; 
  // // 이렇게 입력시 현재 url에 /about을 붙인 곳으로 이동 
  // // *단 about앞에 /about을 붙이게되면 진짜 /about으로 이동되니 현재 기준으로 하려면
  // // 앞에 슬래쉬를 빼줘야함

  // <Route path="" exact />
  // <Route path="about" />  
  // const {data, isLoading} = useQuery<IGetMoviesResult>(
  //   ["movies", "nowplaying"], 
  //   getNowPlayingMovies
  //   ); // useQuery는 data랑 아직 로딩중인지9isLoading)을 알려준다.
  // // console.log(data, isLoading);
  // const [index, setIndex] = useState(0);
  // const [leavig, setLeaving] = useState(false);
  // const incraseIndex = () => {
  //   if(data){
  //     if(leavig) return; // 처음 클릭할 때 leaving은 false이지만
  //     toggleLeaving(); // 여기서 leaving을 true로 바꾸고 index를 증가시킬것이다.
  //     const totalMovies = data.results.length - 1; // Banner에서 하나를 사용하고 있기때문에 하나를 빼줌.
  //     const maxIndex = Math.floor(totalMovies / offset) -1; // api의 자료 개수를 6으로 나눈다.
  //    // Math.ceil은 소수점을 내림한다. 영화가 얼마나 될지 모르기때문. page가 0에서 시작하기때문에 -1을 해준다.
  //     setIndex((prev) => prev === maxIndex ? 0 : prev + 1); // index가 maxIndex와 같으면 0으로 바꾸고 아니면 1을 더한다.
  //   }
  // };
  // const toggleLeaving = () => setLeaving(false);
  //   return (
  //     <S.Wrapper>{isLoading? (
  //       <S.Loader>Loading..</S.Loader>
  //     ):(
  //       <>
  //       <S.Banner 
  //       onClick={incraseIndex}
  //       bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
  //       >
  //         <S.Title>{data?.results[0].title}</S.Title> 
  //         <S.Overview>
  //         {data?.results[0].overview}
  //         </S.Overview>
  //       </S.Banner>
  //       <S.Slider>
  //         <AnimatePresence
  //         initial={false} // initial을 false로 설정해주면 처음에는 아무것도 안보여준다.
  //         onExitComplete={toggleLeaving} // onExitComplete는 애니메이션이 끝나고 실행된다.
  //         >
  //         <S.Row
  //           variants={rowVariants}
  //           initial="hidden"
  //           animate="visibal"
  //           exit="exit"
  //           transition={{type:"tween", duration: 1}}
  //           key={index}
  //         >
  //           {data?.results
  //           .slice(1)
  //           .slice(offset*index, offset*index+offset)
  //           .map((movie) => (
  //             <S.Box 
  //             key={movie.id}
  //             whileHover="hover"
  //             initial="normal"
  //             variants={boxVariants}
  //             transition={{type:"tween"}}
  //             bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
  //             >
  //               <S.Info variants={infoVariants}>
  //               <h4>{movie.title}</h4>
  //               </S.Info>
  //             </S.Box >
  //           ))}
  //         </S.Row>
  //         </AnimatePresence>
  //       </S.Slider>    
  //       </>
  //     )}
  //     </S.Wrapper>
  //   );