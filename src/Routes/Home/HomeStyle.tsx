import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
// AnimatePresence는 컴포넌트가 render되거나 destory될때 효과를 줄 수 있다.

export const Wrapper = styled.div`
  /* overflow-x: hidden; */
  background-color: #101820;
  height: 100vh;
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
`;
