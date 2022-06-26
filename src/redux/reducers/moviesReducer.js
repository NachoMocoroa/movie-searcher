import MOVIES from "../types";

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  error: null
};

const moviesReducer = (state = initialState, action) => {
  
  const { type } = action;

  switch (type) {

    case MOVIES.REQUEST_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case MOVIES.REQUEST_SUCCESS: {
      return {
        ...state,
        movies: action.movies,
        isLoading: false,
        isError: false,
        error: null
      };
    }
    case MOVIES.REQUEST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error
      };
    }

    default:
      return state;
  }
};

export default moviesReducer;