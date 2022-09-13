import { AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { PathMatch, useLocation, useMatch, useNavigate, useParams } from "react-router-dom"; // useMatch는 현재 url의 path를 가져온다.
import { useRecoilState } from "recoil";
import {IMovieRecommendations, IMovieDetail} from "../../Api/api";
import { makeImagePath } from "../../Api/utilities";
import { modalState } from "../../atom";
import * as S from "./ModalStyle";
import TrailerVideo from "./Trailer/Trailer";

interface IModalData{
     children?: any;
     movieDetail: IMovieDetail;
     movieClips?: [string];
     movieRecomendations?: IMovieRecommendations;
}

function Modal({ movieDetail, movieClips, movieRecomendations }: IModalData) {
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
     const onModaleOpen = (
          part: string | undefined,
          id: number,
          sliderId: string | undefined
     ) => {
          setIsModalActive(true);
          navigate(`/${part}/${sliderId}/${id}`);
     }

     const recommend = movieRecomendations?.results?.slice(0,12)
     return (
          <>
               <AnimatePresence>
                    {bigModalMatch ? (
                         <>
                              <S.Overlay 
                              exit={{ opacity: 0 }} // opacity는 투명도를 의미한다.
                              animate={{ opacity: 1 }} 
                              initial={{ opacity: 0 }} 
                              transition={{type: "tween", duration: 0.3}} 
                              />
                              <S.ModalContainer>
                                   <S.ModalDialog
                                   exit={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   initial={{ opacity: 0 }}
                                   transition={{type: "tween", duration: 0.5}}
                                   >
                                        <S.ModalHeader
                                        // bgPhoto={makeImagePath(
                                        //      movieDetail?.backdrop_path || movieDetail?.poster_path //
                                        // )}
                                        >
                                             <div className="video">
                                                  <TrailerVideo part={part} id={id}/>
                                             </div>
                                        </S.ModalHeader>
                                        <S.CloseButton onClick={onModalClose}>
                                             <MdClose size="25px"/>
                                        </S.CloseButton>
                                   </S.ModalDialog>
                              </S.ModalContainer>
                         </>
                    ) : null}
               </AnimatePresence>
          </>
     );
}

export default Modal;