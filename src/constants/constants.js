const NAVIGATION = {
    HOME: {
        index: 1,
        path: "/",
        text: "Home"
    },
    SEARCH: {
        index: 2,
        path: "/search",
        text: "Search"
    },
    MY_LIST: {
        index: 3,
        path: "/myList",
        text: "My List"
    }
};

const movieDefault = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
};

const MovieListDefault = {
    id: '',
    movie: movieDefault,
    punctuation: '',
    comments: ''
};

export { NAVIGATION, movieDefault, MovieListDefault };
