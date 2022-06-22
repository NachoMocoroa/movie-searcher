export interface MovieFormParams {
    punctuation: string;
    comments: string;
};

export interface Message {
    title: string;
    text: string;
};

export interface MovieResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export interface MovieList {
    id?: string;
    movie: MovieResult;
    punctuation: string;
    comments: string;
};

export interface MoviesSearchJSON {
    page?: number;
    results: Array<MovieResult>;
    total_pages?: number;
    total_results?: number;
};

export interface MoviesInfoJSON {
    page: number;
    results: Array<MovieResult>;
    total_pages: number;
    total_results: number;
};

export interface MoviesErrorJSON {
    status_code: number;
    status_message: string;
    success: boolean;
};

export interface MoviesJson {
    movies: MoviesInfoJSON,
    isLoading: boolean,
    isError: boolean,
    error: MoviesErrorJSON,
};

export interface SearchesJson {
    searches: MoviesInfoJSON,
    isLoading: boolean,
    isError: boolean,
    error: MoviesErrorJSON,
};

export interface MoviesListJson {
    moviesList: Array<MovieList>,
    isLoading: boolean,
    isError: boolean,
    error: MoviesErrorJSON,
};

export interface MoviesData {
    movies: MoviesJson,
    searches: SearchesJson;
    moviesList: MoviesListJson;
    isLoading: boolean,
    isError: boolean,
    error: MoviesErrorJSON,
};
