import styled from "styled-components";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
    border: 1px solid red;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap; */
`;

export const VideoWrapper = styled.div`
    background-color: black;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Player = styled(ReactPlayer)`
`;

export const Volum = styled.svg`
    border: 1px solid white;
    position: relative;
    width: 100px;
    bottom: 10px;
`;

export const ModalTitle = styled.div`
    border: 1px solid red;
  position: absolute;
  top: 5;
  left: 0;
  right: 0;
  height: 70%;
  background: linear-gradient(0deg, #181818, transparent 50%);
`;