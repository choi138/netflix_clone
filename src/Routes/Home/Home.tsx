import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../../api";
import { makeImagePath } from "../../utilities";
import * as S from "./HomeStyle";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState } from "react";
// AnimatePresence는 컴포넌트가 render되거나 destory될때 효과를 줄 수 있다.


const rowVariants = {
  hidden: {
    x: window.innerWidth + 10, // x축으로 window의 너비만큼 이동한다.
  },
  visibal: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth -10,
  },
}

const offset = 6;

function Home() {
  const {data, isLoading} = useQuery<IGetMoviesResult>(
    ["movies", "nowplaying"], 
    getMovies
    ); // useQuery는 data랑 아직 로딩중인지9isLoading)을 알려준다.
  // console.log(data, isLoading);
  const [index, setIndex] = useState(0);
  const [leavig, setLeaving] = useState(false);
  const incraseIndex = () => {
    if(data){
      if(leavig) return; // 처음 클릭할 때 leaving은 false이지만
      toggleLeaving(); // 여기서 leaving을 true로 바꾸고 index를 증가시킬것이다.
      const totalMovies = data.results.length - 1; // Banner에서 하나를 사용하고 있기때문에 하나를 빼줌.
      const maxIndex = Math.floor(totalMovies / offset) -1; // api의 자료 개수를 6으로 나눈다.
     // Math.ceil은 소수점을 내림한다. 영화가 얼마나 될지 모르기때문. page가 0에서 시작하기때문에 -1을 해준다.
      setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
    }
  };
  const toggleLeaving = () => setLeaving(false);
    return (
      <S.Wrapper>{isLoading? (
        <S.Loader>Loading..</S.Loader>
      ):(
        <>
        <S.Banner 
        onClick={incraseIndex}
        bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
        >
          <S.Title>{data?.results[0].title}</S.Title> 
          <S.Overview>
          {data?.results[0].overview}
          </S.Overview>
        </S.Banner>
        <S.Slider>
          <AnimatePresence
          initial={false} // initial을 false로 설정해주면 처음에는 아무것도 안보여준다.
          onExitComplete={toggleLeaving} // onExitComplete는 애니메이션이 끝나고 실행된다.
          >
          <S.Row
            variants={rowVariants}
            initial="hidden"
            animate="visibal"
            exit="exit"
            transition={{type:"tween", duration: 1}}
            key={index}
          >
            {data?.results
            .slice(1)
            .slice(offset*index, offset*index+offset)
            .map((movie) => (
              <S.Box 
              key={movie.id}
              bgPhoto={makeImagePath(movie.backdrop_path, "w500")}/>
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