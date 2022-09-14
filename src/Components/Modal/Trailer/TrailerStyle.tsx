import styled from "styled-components";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
/* border: 1px solid red; */
    position: relative;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  height: 102%;
  object-fit: contain; // 이미지가 화면에 꽉차게 만들어준다.
`;

export const Player = styled(ReactPlayer)`
`;

export const VolumDiv = styled.div`
position: relative;
z-index: 30;
margin-left: 10px;
    width: fit-content;
    svg{
        width: 28px;
        height: 28px;
    }
`;

export const Volum = styled.svg`
    position: relative;
    bottom: 34px;
`;

export const ModalTitle = styled.div`
    /* border: 3px solid blue; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
  background: linear-gradient(0deg, #101820, transparent 80%); //0deg는 위에서 아래

`;