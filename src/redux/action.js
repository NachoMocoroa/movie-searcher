import axios from "axios";
import MOVIES from "./constants";

const KEY = '8f781d70654b5a6f2fa69770d1d115a3';
const API_URL = 'https://api.themoviedb.org/';

export const requestMovies = () => async (dispatch) => {

    const request = `${API_URL}3/discover/movie?sort_by=popularity.desc&api_key=${KEY}`;
    
    dispatch({
        type: MOVIES.REQUEST_DATA,
    });
    try {
        const json = await axios.get(request);
        dispatch({
            type: MOVIES.LOAD_SUCCESS,
            moviesData: json.data,
            isError: false
        });
    } catch (e) {
        dispatch({
            type: MOVIES.LOAD_ERROR,
            moviesData: [],
            isError: true,
            error: e.response.data
        });
    }
};

export const searchMovies = (query) => async (dispatch) => {
    console.log('query: ', query);

    const request = `${API_URL}3/search/movie?&query=${query}&api_key=${KEY}`;
    
    dispatch({
        type: MOVIES.SEARCH,
    });
    try {
        const json = await axios.get(request);
        console.log('json: ', json);
        dispatch({
            type: MOVIES.SEARCH_SUCCESS,
            moviesSearch: json.data,
            isError: false
        });
    } catch (e) {
        console.log('e: ', e);
        dispatch({
            type: MOVIES.SEARCH_ERROR,
            moviesSearch: [],
            isError: true,
            error: e.response.data
        });
    }
};
