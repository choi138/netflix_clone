import {IMovieDetail, IGetMovieRecommendations} from '../../Api/api';

interface IModalData {
    movieDetails: IMovieDetail;
    movieClips: [string];
    movieRecommendations: IGetMovieRecommendations;
}

function Modal({movieDetails, movieClips, movieRecommendations}: IModalData) {
     return null;
}

export default Modal;