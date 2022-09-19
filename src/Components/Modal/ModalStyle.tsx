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
    /* border: 1px solid red; */
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    column-gap: 2em; // column-gap : 열 사이의 간격을 설정한다.
`;

export const DetailLeft = styled.div`
    /* border: 1px solid white; */
`;

export const DetailData = styled.div`
    /* border: 1px solid green; */
    margin: 0.8em 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 800;
`;

export const RealeaseDate = styled.div`
    margin-right: 0.8em;
    font-weight: 600;
    color: #E10600FF;
`;

export const Runtime = styled.div`
    color: #F2AA4C;
    margin-right: 0.8em;
`;

export const HD = styled.span`
    color: #DAA03D;
    border: 1px solid hsla(0, 0%, 100%, 0.4); //hsla는 색상, 채도, 명도, 투명도를 의미한다.
    border-radius: 3px;
    font-size: 0.8em; 
    padding: 0.05em 0.5em;
    white-space: nowrap; //white-space는 공백을 어떻게 처리할지를 정한다.
`;

export const TagLine = styled.p`
    font-size: 15px;
    line-height: 25px; 
    margin-top: 1em;
    color: #F2AA4C;
    font-style: italic;
    border-bottom: 1px solid #DAA03D;
`;

export const OverView = styled.p`
    font-size: 15px;
    font-weight: 350;
    line-height: 25px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: #F2AA4C;
`;

export const DetailRight = styled.div`
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ModalTags = styled.div`  
    font-size: 14px;
    line-height: 20px;
    margin-top: 0.5em;
    font-weight: 400;
    color: #a68142;
    word-break: break-word; //word-break는 단어가 줄바꿈 되는 위치를 정한다.
    span{
        opacity: 1;
        /* color: #F2AA4C; */
        margin-right: 0.5em;
    }
`;

export const Cast = styled.span` 
    /* font-size: 16px; */
    color: #F2AA4C;
    font-weight: 400;
`;

export const Genres = styled.span``;

export const Genre = styled(Cast)`  
`;

export const Rating = styled(Cast)`
        margin-left: 0.5em;
`;

export const Title = styled.span`
    color: #F2AA4C;
    font-weight: 400;
    margin-left: 0.5em;
`;

export const ModalFooter = styled.div`
    border: 1px solid blueviolet;
`;

export const ModalTitle = styled.h3`
    border: 1px solid blue;
    font-size: 22px;
    font-weight: 600;
    color: #F2AA4C;
    margin-bottom: 20px;
    margin-top: 48px;
`;

export const ClipsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: column;
`;

export const ClipIcon = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
    background-color: rgba(0, 0, 0, 0.5); 
    opacity: 0;
    border-radius: 50%;
  transition:  opacity 0.2s ease-in;
`;

export const ClipUrl = styled.a`    
    position: relative;
    align-items: center;
    border-bottom: 1px solid #DAA03D;
    display: flex;
    overflow: hidden; 
    padding: 1em;
    /* border: 1px solid red; */
    &:hover{
        background-color: #333;
        ${ClipIcon} {
            /* visibility: visible; */
            opacity: 1;
        }
    }
`;

export const ClipIndex = styled.div`
    color: #d2d2d2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 5%;
    font-size: 1.3em;
    font-weight: 400;
`;

export const ClipImg = styled.div<{ coverImg?: string }>`
    background: url(${(props) => props.coverImg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 16px;
    flex: none;
    width: 130px;
    height: 100px;
    /* border: 1px solid red; */
`;

export const ClipInfo = styled.div`
    /* border: 1px solid red; */
    height: 45px;
    font-size: 0.95em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ClipTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    overflow: anywhere; //overflow anywhere는 줄바꿈이 되지 않는다.
`;

export const ClipDate = styled.span`
    font-size: 14px;
    color: #d2d2d2;
    font-weight: 300;
`;

export const RecommendWrap = styled.div`
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: repeat(4, 1fr); //repeat(4, 1fr)은 4개의 열을 만들고 각 열의 너비를 1fr로 설정한다.
    grid-gap: 1em;
    align-items: stretch; // stretch는 열의 높이를 자식 요소의 높이에 맞춘다.
    justify-content: stretch;
`;

export const RecommendImg = styled.img`
`;

export const RecommendInfo = styled(motion.div)`
    position: absolute;
    bottom: 0;
    display: flex;
    height: 220px;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #2f2f2f;
    /* border: 1px solid red; */
    position: absolute;
    width: 100%;
    /* padding: 0 10px; */
`;

export const RecommendTitle = styled.h4`
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 450;
    /* border: 1px solid red; */
`;

export const RecommendDate = styled.span`
    color: #46d369;
    font-weight: 500;
    margin-bottom: 10px;
    /* border: 1px solid red; */
    margin-left: 10px;
`;

export const RecommendSum = styled.span`
    /* border: 1px solid red; */
    color: #d2d2d2;
    margin-bottom: 20px;
    margin-left: 10px;
`;

export const RecommendMovie = styled.div`
    /* border: 1px solid white; */
    height: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden; 
    cursor: pointer;
    &:hover{

    }
    ${RecommendImg}{
        width: 100%;
        border-radius: 5px;
        }
`;

