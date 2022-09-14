import styled from "styled-components";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
/* border: 1px solid red; */
    position: relative;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  height: calc((100vh - 48px) * (3 / 5));
  object-fit: contain; // 이미지가 화면에 꽉차게 만들어준다.
`;

export const Player = styled(ReactPlayer)`
`;

export const VolumDiv = styled.div`
position: absolute;
left: 0;
bottom: 15px;
opacity: 0.5;
z-index: 30;
margin-left: 10px;
    width: fit-content;
    svg{
        width: 30px;
        height: 30px;
    }
    &:hover{
      opacity: 1;
      transition: 0.3s ease-in-out all 0s;
      color: white;
    }
`;

export const Volum = styled.svg`
    position: relative;
    border: 1px solid white;
    padding: 5px;
    border-radius: 50%;
    /* bottom: 14px; */
`;

export const ModalTitle = styled.div`
    /* border: 3px solid blue; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
  background: linear-gradient(0deg, #101820, transparent 50%); //0deg는 위에서 아래

`;