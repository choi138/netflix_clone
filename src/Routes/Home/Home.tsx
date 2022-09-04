import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../../api";
import { makeImagePath } from "../../utilities";
import * as S from "./HomeStyle";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState } from "react";
// AnimatePresence는 컴포넌트가 render되거나 destory될때 효과를 줄 수 있다.

const rowVariants = {
  hidden: {
    x: window.outerWidth + 2000, 
  },
  visible: {
    x: 0,
  },
  exit:{
    x: window.outerWidth-2000,
  }
}

function Home() {
  const {data, isLoading} = useQuery<IGetMoviesResult>(
    ["movies", "nowplaying"], 
    getMovies); // useQuery는 data랑 아직 로딩중인지9isLoading)을 알려준다.
  // console.log(data, isLoading);
  const [index, setIndex] = useState(0)
  const incraseIndex = () => setIndex((prev) => prev + 1);
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
          <AnimatePresence>
            <S.Row
              variants={rowVariants} 
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{type:"tween", duration: 1}}
              key={index}
            >
              {[1,2,3,4,5,6].map((i) =>(
              <S.Box key={i}>{i}</S.Box>
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