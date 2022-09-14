import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

export const Overlay = styled(motion.div)`
    /* border: 1px solid red; */
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    /* background-color: #101820; */
    z-index: 100; 
`;

export const ModalContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

export const ModalDialog = styled(motion.article)` //article은 문서의 구획을 나타낸다.
    /* border: 1px solid red; */
    position: relative;
    margin: 24px auto;
    max-width: 900px;
    width: 100%;
    height: calc(100vh - 3rem);
    box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
    border-radius: 10px;
    background-color: #101820;
    overflow: auto;
    z-index: 103;
    &::-webkit-scrollbar { //스크롤바를 없애준다.
        display: none;
    }
`;

export const ModalHeader = styled.div<{ bgPhoto?: string }>`
    width: 100%;
    height:  calc((100vh - 48px) * (3 / 5));
    object-fit: cover;
    background-image: 
    linear-gradient(0deg, #101820, transparent 80%), //0deg는 위에서 아래
    url(${(props) => props.bgPhoto});
    background-size: cover;
`;

export const CloseButton = styled.div`
    /* border: 1px solid red; */
    margin: 10px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Video = styled.div``;

export const DetailModal = styled.div`
    width: 100%;
    padding: 0 3em; // 3em은 3배의 em을 의미한다. em은 부모의 font-size를 의미한다.
`;

export const ModalSection = styled.section`
    border: 1px solid red;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    column-gap: 2em; // column-gap : 열 사이의 간격을 설정한다.
`;

export const DetailWrap = styled.div`
    border: 1px solid white;
`;

export const DetailData = styled.div`
    border: 1px solid green;
    margin: 0.8em 0;
    /* color: #DAA03D; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 800;
`;

export const RealeaseDate = styled.div`
    margin-right: 0.5em;
    font-weight: 600;
    color: #F2AA4C;
`;