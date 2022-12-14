import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
// AnimatePresence는 컴포넌트가 render되거나 destory될때 효과를 줄 수 있다.

export const Wrapper = styled.div`
  /* overflow-x: hidden; */
  background-color: #101820;
  height: 100vh;
  width: 100%;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  position: relative;
  top: -10px;
  min-width: 840px;
  width: 100%;
`;


export const Wrap = styled.div`
  /* border: 1px solid red; */
  margin-top: 100px;
  /* width: 1600px; */
`;

export const TvWrap = styled.div`
  margin-top: 100px;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  border-bottom: 1px solid #F2AA4C;
width: 1600px;
  /* text-decoration: underline; */
  color: #F2AA4C;
  /* color: #DAA03D; */
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 30px;
`;