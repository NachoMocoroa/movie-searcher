import MOVIES from "../types";

const initialState = {
  searches: [],
  isLoading: false,
  isError: false,
  error: null
};

const searchReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    
    case MOVIES.SEARCH_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case MOVIES.SEARCH_SUCCESS: {
      return {
        ...state,
        searches: action.movies,
        isLoading: false,
        isError: false,
        error: null
      };
    }
    case MOVIES.SEARCH_ERROR: {
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

export default searchReducer;