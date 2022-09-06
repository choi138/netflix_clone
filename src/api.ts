const API_KEY = "3e354f52d83220768ad48a5e6ab5121b"
const BASE_PATH = "https://api.themoviedb.org/3"

interface IMovie {
    backdrop_path: string;
    poster_path: string;
    genre_ids: [number];
    id: number; //
    release_date: string; // "2019-10-04"
    title: string; // original_title
    overview: string; // original_overview
}

export interface IGetMoviesResult {
    dates:{
        maximum: string;
        minimum: string;
    }
    page: number;
    results: [IMovie];
    total_pages: number;
    total_results: number;
}

export function getMovies(){
    return(
        fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)
        .then(reponse => reponse.json())
    )
}