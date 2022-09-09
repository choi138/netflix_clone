import { useEffect, useState } from "react";
import { BsInfoCircle, BsPlayFill } from "react-icons/bs";  // react-icons는 아이콘을 사용할 수 있게 해준다.
import {useRecoilState} from "recoil";
import {IMovie} from "../../Api/api";
import { modatState } from "../../atom";
import {useNavigate} from "react-router-dom"; //useNavigate는 양식이 제출되거나 특정 event가 발생할 때,  url을 조작할 수 있는 interface를 제공한다.
import * as S from "./BannerStyle";
import { makeImagePath } from "../../Api/utilities";


interface IBanner {
    id: string;
    part: string;
    movies?: IMovie[];
}

function Banner({id, part, movies} : IBanner){
    const [movie, setMovie] = useState<IMovie>();
    useEffect(() => {
        if(movies) setMovie(movies[0]); // movies가 있으면 movie에 movies의 0번째 데이터를 넣는다.
    }, [movies])
    const [isModalActive, setIsModalActive] = useRecoilState(modatState); // useRecoilState은 atom의 값을 가져오는 hook이다.
    const history = useNavigate(); //useNavigate는 history를 사용할 수 있게 해준다. history는 브라우저의 기록을 관리한다.
    const onBoxClick = (part:string, id:number, sliderId: string) => {
        history(`/${part}/${sliderId}/${id}`); // history를 사용해서 url을 조작한다.
        setIsModalActive(true); 
    }
    return (
        <>
            {movie ? (
                <S.Mainhome bgPhoto={makeImagePath(movie?.backdrop_path)}>
                    <S.TitleLayer>
                        <S.TitleWrapper>
                            <S.Title>
                                {part === "movie" ? movie?.title : movie?.name} 
                            </S.Title>
                        </S.TitleWrapper>
                        <S.InfoWrapper>
                            <S.Info>
                                <S.InfoFristText>{movie?.release_date}</S.InfoFristText>
                                <S.InfoSecondText>{movie?.vote_average}</S.InfoSecondText>
                            </S.Info>
                            <S.InfoSummary>{movie?.overview}</S.InfoSummary>
                        </S.InfoWrapper>
                        <S.TitleButtonWrapper>
                            <S.TitlePlayButton onClick={() => {onBoxClick(part, movie.id, id)}}>
                                <S.ButtonIcon>
                                    <BsPlayFill size="30px"/>
                                </S.ButtonIcon>
                                <S.ButtonText>Play</S.ButtonText>
                            </S.TitlePlayButton>
                            <S.TitleInfoButton onClick={() => {onBoxClick(part, movie.id, id)}}>
                                <S.ButtonIcon>
                                    <BsInfoCircle size="20px"/>
                                    <S.ButtonText style={{ marginLeft: "10px" }}>Info</S.ButtonText>
                                </S.ButtonIcon>
                            </S.TitleInfoButton>
                        </S.TitleButtonWrapper>
                    </S.TitleLayer>
                </S.Mainhome>
            ): null}
        </>
    );
}

export default Banner;