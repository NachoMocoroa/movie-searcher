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

const TEXTS = {
    LOGO: {
        text: "MovieSearcher"
    },
    NO_RESULTS: {
        title: 'No results',
        text: 'No results to show.'
    },
    COMMENTS: {text: "Comments"},
    SECTIONS: {
        HOME: {
            title: "The most popular",
            modal_title: "Movie info"
        },
        SEARCH: {
            title: "Search movies",
            text: "Type on the search box what you want to search and click the \"Search\" button.",
            modal_title: "Movie info"
        },
        MY_LIST: {
            title: "My MoviesList",
            text: "Here is your Movies list that you previously selected, click on the cards to edit or to delete the movie selected."
        }
    },
    FORMS: {
        SEARCH: {
            button: "Search"
        },
        MOVIE: {
            punctuation: "Punctuation",
            comments: "Comments",
            submit: "Submit",
            delete: "Delete Movie"
        }
    },
    MOVIE: {
        original_title: "Original title:",
        original_language: "Original language:",
        release_date: "Release date:",
        popularity: "Popularity:",
        vote_average: "Vote average:",
        vote_count: "Vote count:",
        overview: "Overview:"
    },
    ERROR: {
        title: "Error",
        status_code: "Status code:",
        message: "Message:"
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

export { NAVIGATION, TEXTS, movieDefault, MovieListDefault };
