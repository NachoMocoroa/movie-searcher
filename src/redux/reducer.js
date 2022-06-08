import MOVIES from "./constants";

const initalState = {
    moviesData: [],
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
        default:
            return state;
    }
};

export default reducer;
