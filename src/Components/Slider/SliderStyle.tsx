import styled from "styled-components";
import {motion} from "framer-motion";


export const SliderWrapper = styled.div`
    border: 1px solid white;
    position: relative;
    margin: 30px 0;
    /* height: 25vw; */
    padding: 0;
    &:hover svg{
        opacity: 1;
    }
    width: 100%;
    display: inline-block; //inline-block은 요소를 인라인 요소처럼 취급하면서도 블록 요소처럼 줄바꿈이 가능하다.
    /* min-height: 200px; //min-height는 요소의 최소 높이를 지정한다. */
`;

export const SliderTitle = styled.h2`
    border: 1px solid white;
    line-height: 1.2;
    font-size: 14px;
    font-weight: 700;
    margin: 0 0 10px;
    text-decoration: none;
    display: inline-block;
    min-width: 60px;
`;

export const ArrowBox = styled(motion.span)`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100px;
  width: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  color: #fff;
  z-index: 11;
  background: rgba(18,18,18,.45);
  border-radius: 0 5px 5px 0;
  svg {
    color: #fff;;
    transition: all 0.1s ease;
    opacity: 0;
  }
  &:hover svg {
    color: #F2AA4C;
    /* transform: scale(1.4); */
  }
`;

export const Row = styled(motion.div)`
    display: grid;
    gap: 10px;
    margin-bottom: 5px;
    grid-template-columns: repeat(6,1fr);  //repeat(6,1fr)은 6개의 열을 만들고 각 열의 너비를 1fr로 설정한다.
    padding: 30px;
    position: absolute;
`;

export const MovieBox = styled(motion.div)`
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

export const MovieBoxInfo = styled(motion.div)`
    padding: 10px;
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
  /* border: 1px solid red; */
  right: 0;
  border-radius: 5px 0 0 5px;
`;