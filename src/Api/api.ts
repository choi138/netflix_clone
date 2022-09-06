const API_KEY = "3e354f52d83220768ad48a5e6ab5121b"
const BASE_PATH = "https://api.themoviedb.org/3"

export interface IMovie { // 영화 +@TV 인터페이스
    backdrop_path: string; // 백그라운드 이미지
    poster_path: string; // 포스터 이미지
    genre_ids: [number]; // 장르 아이디
    id: number; // 영화 아이디
    release_date: string; // 개봉일
    title: string; // 영화 제목
    overview: string; // 줄거리
    video: boolean; // 비디오가 있는지 여부
    vote_average: number; // 평점
    popularity: number; // 인기도
    vote_count: number; // 평점 투표 수
    is_tv?: boolean; // TV 프로그램인지 여부
    name?: string; // TV 프로그램 제목
}

export interface IGetMoviesResult { // 영화 +@TV 목록 인터페이스
    dates:{
        maximum: string;
        minimum: string;
    }
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IMovieDetail{ // 영화 +@TV 상세 정보 인터페이스
    genres: [number]; // 장르 아이디
    homepage: string; // 홈페이지
    id: number; // 영화 아이디
    name?: string; // TV 프로그램 제목
    first_air_date?: string; // TV 프로그램 첫 방영일
    episode_run_time?: [number]; // TV 프로그램 한 에피소드의 길이
    original_language: string; // 원본 언어
    original_title?: string; // 원본 제목
    overview: string; // 줄거리
    popularity: number; // 인기도
    poster_path: string; // 포스터 이미지
    release_date?: string; // 개봉일
    runtime: number; // 영화 한 편의 길이
    tagline: string; // 태그라인
    title: string; // 영화 제목
    vote_average: number; // 평점
    backdrop_path: string; // 백그라운드 이미지
};

export interface IGetMovieRecommendations{ // 영화 +@TV 추천 목록 인터페이스
    page: number; // 페이지
    results: IMovie[]; // 영화 +@TV 목록
    total_pages: number; // 전체 페이지 수
    total_results: number; // 전체 결과 수
};


//Movie API
export function getNowPlayingMovies(){ // 현재 상영중인 영화 목록 가져오기
    return(
        fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)
        .then(reponse => reponse.json())
    )
}
export function getTopRatedMovies(){ // 평점 높은 영화 목록 가져오기
    return(
        fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`)
        .then(reponse => reponse.json())
    )
}
export function getUpcomingMovies(){ // 개봉 예정 영화 목록 가져오기
    return(
        fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}`)
        .then(reponse => reponse.json())
    )
}

// Tv API
export function getTvAiring(){ // 방영중인 TV 프로그램 목록 가져오기
    return(
        fetch(`${BASE_PATH}/tv/airing_today?api_key=${API_KEY}`)
        .then(reponse => reponse.json())
    )
}
export function getTvTopRated(){ // 평점 높은 TV 프로그램 목록 가져오기
    return(
        fetch(`${BASE_PATH}/tv/top_rated?api_key=${API_KEY}`)
        .then(reponse => reponse.json())
    )
}
export function getTvPopular(){ // 인기있는 TV 프로그램 목록 가져오기
    return(
        fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`)
        .then(reponse => reponse.json())
    )
}

// Search Movie API
export function findMovies(keyword: string | null) { // 영화 검색
    return fetch(`${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${keyword}`)
    .then((response) => response.json());
}

// Search TV API
export function findTv(keyword: string | null) { // TV 프로그램 검색
    return fetch(`${BASE_PATH}/search/tv?api_key=${API_KEY}&query=${keyword}`)
    .then((response) => response.json());
}

// Movie +@TV Detail API
export async function getDetail(part?: string, id?: number){ // 영화 +@TV 상세 정보 가져오기
    return(
        await fetch(`${BASE_PATH}/${part}/${id}?api_key=${API_KEY}`)
        .then(reponse => reponse.json())
    )
}

// Movie +@TV Clicp API
export async function getClip(part?: string, id?: number){ // 영화 +@TV 클립 가져오기
    return await fetch(`${BASE_PATH}/${part}/${id}/videos?api_key=${API_KEY}`)
    .then((response) => response.json());
}

// Movie +@TV Trailer API
export async function getTrailer(part?: string, id?: number){ // 영화 +@TV 예고편 가져오기
    return await (
        await fetch(`${BASE_PATH}/${part}/${id}/videos?api_key=${API_KEY}`)
        ).json();
}

// Movie +@TV Recommend API
export async function getRecommend(part?: string, id?: number){ // 영화 +@TV 추천 목록 가져오기
    return await fetch(`${BASE_PATH}/${part}/${id}/recommendations?api_key=${API_KEY}`)
    .then((response) => response.json());
};
