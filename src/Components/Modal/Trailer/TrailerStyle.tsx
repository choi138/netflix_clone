import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: calc(100% + 2px);
    right: 0;
    left: 0;
    top: 0;
    height: calc(100vh - 48px);
    object-fit: contain; // object-fit은 이미지의 크기를 조절할 때 사용한다.
    iframe {
        position: relative;
        width: 100%;
        height: 100%;
    }
`;

export const ModalTitleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;