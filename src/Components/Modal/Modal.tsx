import { MdClose, MdPlayArrow } from "react-icons/md";
import { PathMatch, useLocation, useMatch, useNavigate, useParams } from "react-router-dom"; // useMatch는 현재 url의 path를 가져온다.
import { useRecoilState } from "recoil";
import { IMovieRecommendations, IMovieDetail, IMovieCredits, ICast } from "../../Api/api";
import { makeImagePath } from "../../Api/utilities";
import { modalState } from "../../atom";
import * as S from "./ModalStyle";
import TrailerVideo from "./Trailer/Trailer";
import { AnimatePresence, motion } from "framer-motion";
import { getYoutubeImg, getYoutubeVideoUrl } from "../../Api/utils";

interface IModalData {
  children?: any;
  movieDetail: IMovieDetail;
  movieCredits: ICast[];
  movieClips?: [string];
  movieRecomendations?: IMovieRecommendations;
}

function Modal({ movieDetail, movieClips, movieRecomendations, movieCredits }: IModalData) {
  const bigModalMatch: PathMatch<string> | null = useMatch("/:part/:sliderPart/:id");
  const part = bigModalMatch?.params.part;
  const id = bigModalMatch?.params.id;
  const sliderPart = bigModalMatch?.params.sliderPart;
  const navigate = useNavigate();

  const [isModalActive, setIsModalActive] = useRecoilState(modalState);

  const onModalClose = () => {
    setIsModalActive(false);
    navigate(-1);
  }
  const onModalOpen = (
    part: string | undefined,
    id: number,
    sliderId: string | undefined
  ) => {
    setIsModalActive(true);
    navigate(`/${part}/${sliderId}/${id}`);
  }

  const recommend = movieRecomendations?.results?.slice(0, 12)
  return (
    <>
      <AnimatePresence>
        {bigModalMatch ? (
          <>
            <S.Overlay
              exit={{ opacity: 0 }} // opacity는 투명도를 의미한다.
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
            />
            <S.ModalContainer>
              <S.ModalDialog
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                <S.ModalHeader
                  bgPhoto={makeImagePath(
                    movieDetail?.backdrop_path || movieDetail?.poster_path
                  )}
                >
                  <S.Video>
                    <TrailerVideo part={part} id={id} />
                  </S.Video>
                </S.ModalHeader>
                <S.CloseButton onClick={onModalClose}>
                  <MdClose size="28px" />
                </S.CloseButton>
                <S.DetailModal>
                  <S.ModalSection>
                    <S.DetailLeft>
                      {" "}
                      <S.DetailData>
                        <S.RealeaseDate>
                          {part === "movie" ?
                            movieDetail.release_date :
                            movieDetail.first_air_date}
                          {/* {movieCredits.slice(0, 4).map((cast, key) => (
                            <S.Cast key={key}>{cast.name}</S.Cast>
                          ))} */}
                        </S.RealeaseDate>
                        <S.Runtime>
                          {part === "movie" ?
                            `${movieDetail.runtime} minutes` :
                            `${movieDetail.episode_run_time} minutes`}
                        </S.Runtime>
                        <S.HD>
                          HD
                        </S.HD>
                      </S.DetailData>
                      <S.TagLine>
                        {movieDetail?.tagline}
                      </S.TagLine>
                      <S.OverView>
                        {movieDetail?.overview}
                      </S.OverView>
                    </S.DetailLeft>
                    <S.DetailRight>
                      <S.ModalTags>
                        Title:
                        <S.Title>{movieDetail.title}</S.Title>
                      </S.ModalTags>
                      <S.ModalTags>
                        Cast:
                        <S.Cast>
                          {movieCredits.slice(0, 4).map
                            ((cast: any) => cast.name).join(", ")}
                        </S.Cast>
                      </S.ModalTags>
                      <S.ModalTags>
                        <S.Genres>Genres:</S.Genres>
                        {movieDetail?.genres?.length ? (

                          <S.Genre>
                            {(movieDetail.genres || []).map
                              ((genre: any) => genre.name).join(", ")}
                          </S.Genre>

                        ) : null}
                      </S.ModalTags>
                      <S.ModalTags>
                        Rating:
                        <S.Rating>{movieDetail.vote_average}</S.Rating>
                      </S.ModalTags>
                    </S.DetailRight>
                  </S.ModalSection>
                  <S.ModalSection>
                    <S.ModalFooter>
                      <S.Title>CLIPS</S.Title>
                      <S.ClipsWrap>
                        {movieClips?.map((clip: any, index: any, key: any) => (
                          <S.ClipUrl
                            key={key}
                            href={getYoutubeVideoUrl(clip.key)}>
                            <S.ClipIndex>{index + 1}</S.ClipIndex>
                            <S.ClipImg
                              coverImg={getYoutubeImg(clip.key)}
                            >
                              <S.ClipIcon>
                                <MdPlayArrow size="48px" />
                              </S.ClipIcon>
                            </S.ClipImg>
                          </S.ClipUrl>
                        ))}
                      </S.ClipsWrap>
                    </S.ModalFooter>
                  </S.ModalSection>
                </S.DetailModal>
              </S.ModalDialog>
            </S.ModalContainer>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Modal;