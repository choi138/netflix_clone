import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
// AnimatePresence는 컴포넌트가 render되거나 destory될때 효과를 줄 수 있다.

export const Wrapper = styled.div`
  /* overflow-x: hidden; */
  background-color: #101820;
  height: 100vh;
`;

export const Container = styled.div`
  height: 30px;
  background-color: #1a7a4c;
`

// export const Wrapper = styled.div`
//   background-color: black;
// `;

// export const Loader = styled.div`
//   height: 20vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const Banner = styled.div<{ bgPhoto: string }>`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 60px;
//   background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${(props) => props.bgPhoto}); //  linear-gradient를 사용해서 배경색을 살짝 어둡게 만들어준다.
//   background-size: cover;
// `;

// export const Title = styled.h2`
//   font-size: 68px;
//   margin-bottom: 20px;
// `;

// export const Overview = styled.p`
//   font-size: 23px;
//   width: 50%;
// `;

// export const Slider = styled.div`
//   position: relative;
//   top: -100px;
// `;

// export const Row = styled(motion.div)`
//   display: grid; // display: grid를 사용해서 박스들을 정렬해준다.
//   gap: 5px; // 박스들 사이의 간격을 조절해준다.
//   grid-template-columns: repeat(6, 1fr); // 6개의 박스를 가로로 정렬해준다.
//   position: absolute;
//   width: 100%;
// `;

// export const Box = styled(motion.div)<{ bgPhoto: string}>`
//   background-color: white;
//   background-image: url(${(props) => props.bgPhoto});
//   background-size: cover;
//   background-position: center center;
//   height: 200px;
//   font-size: 66px;
//   &:first-child {
//     transform-origin: center left; // 첫번째 박스의 원점을 왼쪽으로 옮겨준다.
//   }
//   &:last-child {
//     transform-origin: center right; // 마지막 박스의 원점을 오른쪽으로 옮겨준다.
//   }
// `;

// export const Info = styled(motion.div)`
//   padding: 10px;
//   background-color: ${props => props.theme.black.lighter};
//   opacity: 0 ; // 처음에는 투명하게 만들어준다.
//   position: absolute;
//   width: 100%;
//   bottom: 0;
//   h4{
//     text-align: center;
//     font-size: 18px;
//   }
// `;