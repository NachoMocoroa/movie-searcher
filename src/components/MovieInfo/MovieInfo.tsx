import { saveMovieList, updateMovieList } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { MovieResult, MovieList, MovieFormParams, MoviesData } from '../../models/models';
import { cloneObject, copyObject, updateObjectInArrayByProp } from '../../utils/utils';
import classes from './MovieInfo.module.scss';
import { TEXTS } from '../../constants/constants';

import MovieForm from './MovieForm/MovieForm';

interface Props {
  data: MovieResult;
  setModalState: Function;
}

export default function MovieInfo({ data, setModalState }: Props) {
  
  const { 
    poster_path, 
    title, 
    release_date, 
    original_title, 
    original_language, 
    popularity, 
    vote_average, 
    vote_count, 
    overview 
  } = data;

  const { moviesList } = useSelector((state: MoviesData) => state);
  const dispatch: AppDispatch = useDispatch();

  const getPoster = () => {
    const imgUrlPrefix = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
    return poster_path ? `${imgUrlPrefix}${poster_path}` : './images/no-image.png';
  };

  const getMovieListObject = (data: MovieResult, param: MovieFormParams) => {
    return {
      movie: data,
      punctuation: param.punctuation,
      comments: param.comments,
    };
  };

  const setMovieListItem = (param: MovieFormParams) => {
    dispatch(saveMovieList(param));
    setModalState(false);
  };

  const updateMovieInList = (objIndex: number, params: MovieFormParams) => {
    const moviesListCloned = cloneObject(moviesList);
    const movieUpdated = copyObject(moviesListCloned[objIndex], params);
    return updateObjectInArrayByProp(moviesListCloned, movieUpdated, 'id');
  };

  const setMoviesList = (objExists: number, param: MovieFormParams) => {
    const newMoviesList = updateMovieInList(objExists, param);
    dispatch(updateMovieList(newMoviesList));
    setModalState(false);
  };

  const movieExists = (param: MovieResult) => {
    return moviesList.findIndex((item: MovieList) => item.movie.id === param.id);
  };

  const checkMovieList = (param: MovieFormParams) => {
    const objExists: number = movieExists(data);
    if (objExists === -1) {
      setMovieListItem(getMovieListObject(data, param));
    } else {
      setMoviesList(objExists, param);
    }
  };

  return (
    <div className={classes.movie_info}>
      <div className={classes.movie_info_wrapper}>
        <div className={classes.movie_info__image}>
          <img src={getPoster()} alt={title} />
        </div>
        <div className={classes.movie_info__data}>
          <p className={classes.text_title}>{title}</p>
          <div className={classes.movie_info__data_box}>
            <div className={classes.movie_info__data_box_items}>
              <p><span>{TEXTS.MOVIE.original_title}</span>{original_title}</p>
              <p><span>{TEXTS.MOVIE.original_language}</span>{original_language}</p>
              <p><span>{TEXTS.MOVIE.release_date}</span>{release_date}</p>
            </div>
            <div className={classes.movie_info__data_box_items}>
              <p><span>{TEXTS.MOVIE.popularity}</span>{popularity}</p>
              <p><span>{TEXTS.MOVIE.vote_average}</span>{vote_average}</p>
              <p><span>{TEXTS.MOVIE.vote_count}</span>{vote_count}</p>
            </div>
          </div>
          <div className={classes.overview_wrapper}>
            <span>{TEXTS.MOVIE.overview}</span>
            <p className={classes.text_overview}>{overview}</p>
          </div>
        </div>
      </div>
      <MovieForm submitForm={checkMovieList} />
    </div>
  );
}
