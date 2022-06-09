import MOVIES from "./constants";

const initalState = {
    moviesData: [],
    moviesSearch: [],
    isLoading: false,
    isError: false,
    error: null
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case MOVIES.REQUEST_DATA:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case MOVIES.LOAD_SUCCESS:
            return {
                ...state,
                moviesData: action.moviesData,
                isLoading: false,
                isError: false,
                error: null
            };
        case MOVIES.LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            };
        case MOVIES.SEARCH:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case MOVIES.SEARCH_SUCCESS: {
            /* const { content } = action.payload;
            content.id = `search-${state.moviesSearch.length + 1}`; */
            return {
                ...state,
                //moviesSearch: [...state.moviesSearch, content],
                moviesSearch: action.moviesSearch,
                isLoading: false,
                isError: false,
                error: null
            };
        }
        case MOVIES.SEARCH_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;
