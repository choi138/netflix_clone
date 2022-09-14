import { useEffect, useState } from "react";
import { getTrailer } from "../../../Api/api";
import * as S from "./TrailerStyle"
import { VolumeOff, VolumeUp } from "@mui/icons-material";



interface IGetTrailer {
    id?: string;
    part?: string;
}

interface IVideo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

function TrailerVideo({ part, id }: IGetTrailer) {
    const [volume, setVolume] = useState(true);
    const [videoKey, setVideoKey] = useState("");
    useEffect(() => {
        (async () => {
            const { results } = await getTrailer(part, id); // part는 movie, tv, person이고 id는 해당하는 id이다.
            const trailer = results.filter( // filter는 배열의 요소를 필터링한다.
                (result: IVideo) => result.type === "Trailer" // type이 Trailer인 요소만 필터링한다.
            );
            const randomVideo =
                trailer[Math.ceil(Math.random() * trailer.length - 1)]; // Math.ceil은 소수점을 올림한다. Math.random은 0~1사이의 랜덤한 숫자를 반환한다.
            const videoKey = randomVideo?.key; // key는 비디오의 고유한 id이다.
            setVideoKey(videoKey);
        })();
    }, [id])

    const handleVolume = () => {
        setVolume((prev) => !prev);
    }
    return (
        <>
            {videoKey ? (
                <S.Wrapper>
                    <S.Player
                        url={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&rel=0`}
                        muted={volume ? true : false}
                        playing={true}
                        controls={false}
                        frameBorder="0"
                        style={{ width: "100%", height: "100%", position: "relative" }}
                        width="100%"
                        height="100%"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                    {volume ? (
                        <S.VolumDiv><S.Volum as={VolumeOff} onClick={handleVolume} /></S.VolumDiv>
                    ) : (
                        <S.VolumDiv><S.Volum as={VolumeUp} onClick={handleVolume} /></S.VolumDiv>
                    )}
                    <S.ModalTitle />
                </S.Wrapper>
            ) : null}
        </>
    )
}

export default TrailerVideo;