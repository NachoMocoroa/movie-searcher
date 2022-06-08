export interface Message {
    title: string;
    text: string;
};

export interface MoviesResult {
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

export interface MoviesInfoJSON {
    page: number;
    results: Array<MoviesResult>;
    total_pages: number;
    total_results: number;
};

export interface MoviesErrorJSON {
    status_code: number;
    status_message: string;
    success: boolean;
};

export interface MoviesData {
    moviesData: MoviesInfoJSON,
    isLoading: boolean,
    isError: boolean,
    error: MoviesErrorJSON,
};