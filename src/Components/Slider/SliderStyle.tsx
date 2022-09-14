import styled from "styled-components";
import {motion} from "framer-motion";


export const SliderWrapper = styled.div`
  /* border: 1px solid red; */
  margin-top: 30px;
  position: relative;
  padding: 0;
  &:hover svg {
    opacity: 1;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const TopSliderWrapper = styled(SliderWrapper)`
/* border: 1px solid blue; */
  height: fit-content;
`;

export const SliderTitle = styled.h2`
  /* border: 1px solid green; */
  margin-left: 30px;
text-align: left;
  color: #DAA03D;
  line-height: 1.2;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  width: 100%;
  height: fit-content;
`;

export const ArrowBox = styled(motion.span)`
  /* border: 1px solid red; */
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  color: #fff;
  z-index: 11;
  border-radius: 0 5px 5px 0;
  svg {
    color: white;
    transition: all 0.1s ease;
    opacity: 0;
  }
  &:hover svg {
    color: #F2AA4C;
  }
`;

export const Row = styled(motion.div)`
  padding: 0 30px;
  padding-top: 20px;
  justify-content: center;  
  flex-wrap: wrap;
  display: grid; // display: grid를 사용해서 박스들을 정렬해준다.
  gap: 10px; // 박스들 사이의 간격을 조절해준다.
  grid-template-columns: repeat(6, 1fr); // 6개의 박스를 가로로 정렬해준다.
  position: absolute;
  margin-top: 10px;
  width: 100%;
`;

export const Wrap = styled.div`
/* border: 1px solid green; */
  height: 400px;
  position: relative;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1600px;
`

export const TopWrap = styled(Wrap)`
  height: 420px;
`;


export const MovieBox = styled(motion.div)`
  padding: 10px;
  /* border: 1px solid red; */
    &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  img {
    width: 100%;
    border-radius: 5px;
    transition-delay: 1s;
    &:hover {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  cursor: pointer;
`;

export const TopMovieBox = styled(MovieBox)`
  img{
    width: 100%;
  }
`;

export const MovieBoxInfo = styled(motion.div)`
    background-color: rgba(0,0,0,0.5);
    margin-top: -5px;
    width: 100%;
    bottom: 0;
    opacity: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Moviename = styled(motion.h4)`
    text-align: center;
    font-size: 14px;
`;

export const RightArrow = styled(ArrowBox)`
  /* border: 1px solid blue; */
  right: 0;
  border-radius: 5px 0 0 5px;
`;


