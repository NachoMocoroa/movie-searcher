import MOVIES from "../types";
import DataService from "../../services/services";

export const requestMovies = () => async (dispatch) => {
  const response = await DataService.requestData();
  dispatch({
    type: MOVIES.REQUEST_DATA,
  });
  if(response.status === 200) {
    dispatch({
      type: MOVIES.REQUEST_SUCCESS,
      movies: response.data,
      isError: false
    });
  } else {
    dispatch({
      type: MOVIES.REQUEST_ERROR,
      movies: [],
      isError: true,
      error: response.message
    });
  }
};

export const searchMovies = (query) => async (dispatch) => {
  const response = await DataService.searchData(query);
  dispatch({
    type: MOVIES.SEARCH_DATA,
  });
  if(response.status === 200) {
    dispatch({
      type: MOVIES.SEARCH_SUCCESS,
      movies: response.data,
      isError: false
    });
  } else {
    dispatch({
      type: MOVIES.SEARCH_ERROR,
      movies: [],
      isError: true,
      error: response.message
    });
  }
};

export const saveMovieList = content => ({
  type: MOVIES.SAVE_MOVIE,
  payload: {
    content
  }
});

export const updateMovieList = content => ({
  type: MOVIES.UPDATE_MOVIELIST,
  payload: {
    content
  }
});
