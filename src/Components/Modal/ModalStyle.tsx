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
    z-index: 5;
`;

export const ModalContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
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
    z-index: 12;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ModalHeader = styled.div<{bgPhoto? : string}>`
    width: 100%;
    height:  calc(100vh - 48px);
    object-fit: cover;
    background-image: 
    /* linear-gradient((0deg, #181818, transparent 50%)), */
    url(${(props) => props.bgPhoto});
    background-size: cover;
`;

export const CloseButton = styled.div``;