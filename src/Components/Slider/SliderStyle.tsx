import styled from "styled-components";
import {motion} from "framer-motion";


export const SliderWrapper = styled.div`
  /* border: 1px solid red; */
  position: relative;
  height: 250px;
  padding: 0;
  &:hover svg {
    opacity: 1;
  }
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 52px;
  margin-bottom: 50px;
  min-height: 200px;
`;

export const SliderTitle = styled.h2`
text-align: left;
  color: #F2AA4C;
  line-height: 1.2;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  width: 100%;
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
  justify-content: center;  
  flex-wrap: wrap;
  display: grid; // display: grid를 사용해서 박스들을 정렬해준다.
  gap: 5px; // 박스들 사이의 간격을 조절해준다.
  grid-template-columns: repeat(6, 1fr); // 6개의 박스를 가로로 정렬해준다.
  position: absolute;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 100%;
`;

export const Wrap = styled.div`
  height: 400px;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  
`

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
    /* padding: 10px; */
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