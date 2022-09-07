import { useState } from "react";
import {useRecoilState} from "recoil";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../../Api/api";
import { modatState } from "../../atom";
import * as S from "../Slider/SliderStyle";
import { AnimatePresence } from "framer-motion"; // AnimatePresence는 컴포넌트가 사라질때 애니메이션을 줄 수 있게 해준다.
import { makeImagePath } from "../../Api/utilities";

const rowVariants = {
    hidden: ({prev}: {prev: boolean}) => ({ 
        x: prev ? "-100vw" : "100vw", // prev가 참이라면 x축으로 -100vw만큼 이동하고 거짓이라면 x축으로 100vw만큼 이동한다.
    }),
    visible: {
        x: 0,
    },
    exit:({prev}: {prev: boolean}) => ({ 
        x: prev ? "100vw" : "-100vw", // prev가 참이라면 x축으로 100vw만큼 이동하고 거짓이라면 x축으로 -100vw만큼 이동한다.
    }),
};

const movieBoxVariants = {
    normal:{
        scale: 1, // scale은 요소의 크기를 조절한다.
    },
    hover:{
        scale: 1.3, 
        y: -30, // y축으로 -30만큼 이동한다.
        transition: {
            delay: 0.5, // 0.5초 뒤에 실행한다.
            duration: 0.3, // 0.3초 동안 실행한다.
            type: "tween", // tween은 애니메이션의 종류를 정한다.
        }
    }

}

const infoVariants = {
    hover:{
        opacity: 1, // opacity는 요소의 투명도를 조절한다.
        transition: {
            delay: 0.5, // 0.5초 뒤에 실행한다.
            duration: 0.3, // 0.3초 동안 실행한다.
            type: "tween", // tween은 애니메이션의 종류를 정한다.
        }
    }
}

const offset = 6;
interface IData {
    id: string;
    title: string;
    query: string;
    movies: IMovie[];
    part: string;
}

function Slider({id, title, query, movies, part}: IData) {
    const [index, setIndex] = useState(0);
    const [sliderMoving, setSliderMoving] = useState(false);
    const [sliderMovingPrev, setSliderMovingPrev] = useState(false);

    const totalMovies = movies?.length-1;
    const maxIndex = Math.floor(totalMovies/offset) -1;
    // slider + 1
    const increaseIndex = () => {
        if(!sliderMoving && movies) { // 만약 슬라이더가 움직이고 있지 않고 영화가 존재한다면
            setSliderMoving(true); // 슬라이더 움직임을 true로 변경
            setSliderMovingPrev(true); // 슬라이더 움직임을 true로 변경
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1)); // 0이라면 maxIndex로 초기화, 아니라면 1씩 증가
        }
    };
    // slider - 1
    const decreaseIndex = () => {
        if(!sliderMoving && movies) { // 만약 슬라이더가 움직이고 있지 않고 영화가 존재한다면
            setSliderMoving(true); // 슬라이더 움직임을 true로 변경
            setSliderMovingPrev(true); // 슬라이더 움직임을 true로 변경
            setIndex((prev) => (prev === 0 ? maxIndex : prev - 1)); // 0이라면 maxIndex로 초기화, 아니라면 1씩 감소
        }
    }
    // slider done
    const onExitCompleteSlider = () => {
        setSliderMoving(false); // 슬라이더 움직임을 false로 변경
        setSliderMovingPrev(false); // 슬라이더 움직임을 false로 변경
    };
    const [isModalActive, setIsModalActive] = useRecoilState(modatState); // useRecoilState은 atom의 값을 가져오는 hook이다.
    const history = useNavigate(); //useNavigate는 history를 사용할 수 있게 해준다. history는 브라우저의 기록을 관리한다.
    const onBoxClick = (part:string, id:number, sliderId: string) => {
        history(`/${part}/${sliderId}/${id}`); // history를 사용해서 url을 조작한다.
        setIsModalActive(true); 
    };
    return(
        <S.SliderWrapper>
            <S.SliderTitle>{title}</S.SliderTitle>
            {index === 0 ? null : (
                <S.ArrowBox onClick={decreaseIndex}>
                    <MdKeyboardArrowLeft size="3vw" />
                </S.ArrowBox>
            )}
            <AnimatePresence
            custom={{prev: sliderMovingPrev}} // custom={{prev: sliderMovingPrev}}는 슬라이더가 이전으로 움직이는지 다음으로 움직이는지를 알려준다.
            initial={false} // 초기값을 false로 설정
            onExitComplete={onExitCompleteSlider} // 슬라이더가 사라지고 나서 실행할 함수
            > 
            <S.Row
            variants={rowVariants}
            initial="hidden" // 초기값을 hidden으로 설정
            animate="visible" // 실행될 애니메이션을 visible로 설정
            exit="exit" // 사라질 애니메이션을 exit로 설정
            custom={{prev: sliderMoving}} // custom={{prev: sliderMoving}}는 슬라이더가 이전으로 움직이는지 다음으로 움직이는지를 알려준다.
            transition={{type: "tween",duration: 1}} // 애니메이션의 시간을 0.5로 설정;
            key={index} // key값을 index로 설정
            >
                {movies
                ?.slice(1)
                .slice(offset * index, offset * index + offset).map((movie) => (
                    <S.MovieBox
                    variants={movieBoxVariants}
                    initial="normal"
                    whileHover="hover"
                    transition={{type: "tween"}}
                    onClick={() => {onBoxClick(part, movie.id, id)}}
                    key={movie.id}
                    >
                        <img src={makeImagePath(movie.poster_path, "w500")} />
                        <S.MovieBoxInfo variants={infoVariants}>
                            {part === "movie" ? (
                                <S.Moviename>{movie.title}</S.Moviename>
                            ): (
                                <S.Moviename>{movie.name}</S.Moviename>
                            )}
                        </S.MovieBoxInfo>
                    </S.MovieBox>
                ))}
            </S.Row>
            </AnimatePresence>
            <S.RightArrow onClick={increaseIndex}>
                <MdKeyboardArrowRight size="3vw" />
            </S.RightArrow>
        </S.SliderWrapper>
    );
};

export default Slider;