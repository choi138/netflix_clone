import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrap = styled.div`
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Mainhome = styled.div<{ bgPhoto: string }>` // 이미지 칸을 만들어준다.
    /* border: 1px solid red; */
    height: 65vh;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: linear-gradient(
      rgba(19, 16, 16, 0),
      rgba(19, 16, 16, 0.7),
      #101820
    ),
    url(${(props) => props.bgPhoto});
    
  background-size: cover;
`;

export const TitleLayer = styled.div` // 이미지 제목을 넣을 칸을 만들어준다.
    margin-left: 30px;
    margin-top: 50px;
    margin-bottom: 10px;
    width: 100%;
`;

export const TitleWrapper = styled.div` // 이미지 제목을 넣을 칸을 만들어준다.
    display: flex;
    text-align: left;
`;

export const Title = styled.div`
    width: fit-content;
    color: #F2AA4C;
    margin-bottom: 40px;
    font-size: 2.5vw;
    font-weight: 500;
`;

export const InfoWrapper = styled.div`
    min-height: 70px;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 50%);
    color: #F2AA4C;
`;

export const Info = styled.div`
    font-size: 1.1vw;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const InfoFristText = styled.div`
    font-weight: 600;
    color: #E10600FF;
    margin-right: 20px;
`;

export const InfoSecondText = styled.div`
    font-weight: 500;
    margin-right: 10px;
`;

export const InfoSummary = styled.div`
    width: 35vw;
    text-align: left;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const Summary = styled.p`
    font-size: 1.1vw;
`;

export const TitleButtonWrapper = styled.div`
    display: flex;
`;

export const TitlePlayButton = styled(motion.div)`
    width: 5vw;
    -webkit-box-align: center; // flex의 align-items와 같은 기능을 한다.
    align-items: center;
    appearance: none; // 버튼의 기본 스타일을 없애준다.
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center; // flex의 justify-content와 같은 기능을 한다.
    justify-content: center;
    opacity: 1;
    padding: 5px 10px;
    position: relative;
    user-select: none; // 텍스트를 선택하지 못하게 한다.
    will-change: background-color, color; // 애니메이션을 할 때, 렌더링을 최적화 해준다.
    background-color: #F2AA4C;
    color: #101820;
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    margin-right: 10px;
    &:hover {
        background-color: #a07844;
    }
`;

export const ButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.span`
    font-weight: 900;
`

export const TitleInfoButton = styled(TitlePlayButton)`
    background-color: #101820;
    color: #F2AA4C;
    &:hover {
        background-color: rgba(109, 109, 110, 0.4);
    }
`;