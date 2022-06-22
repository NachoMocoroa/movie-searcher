import MOVIES from "../types";

const initialState = {
  moviesList: [],
  isLoading: false,
  isError: false,
  error: null
};

const listReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    
    case MOVIES.SAVE_MOVIE: {
      const { content } = action.payload;
      content.id = `movie-${state.moviesList.length + 1}`;
      return {
        ...state,
        moviesList: [...state.moviesList, content],
      };
    }
    case MOVIES.UPDATE_MOVIELIST: {
      const { content } = action.payload;
      return {
        ...state,
        moviesList: content
      };
    }

    default:
      return state;
  }
};

export default listReducer;