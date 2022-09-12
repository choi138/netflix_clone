import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

export const Overlay = styled(motion.div)`
    border: 1px solid red;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
`;

export const ModalContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
`;