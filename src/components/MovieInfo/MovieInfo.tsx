import { saveMovieList } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { MovieResult, MovieList } from '../../models/models';
import classes from './MovieInfo.module.scss';
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
  const dispatch: AppDispatch = useDispatch();

  const getPoster = () => {
    const imgUrlPrefix = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
    return poster_path ? `${imgUrlPrefix}${poster_path}` : './images/no-image.png';
  };

  const setMovieList = (param: any) => {
    const movieFormObj: MovieList = {
      movie: data,
      punctuation: param.punctuation,
      comments: param.comments,
    };
    dispatch(saveMovieList(movieFormObj));
    setModalState(false);
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
              <p><span>Original title: </span>{original_title}</p>
              <p><span>Original language: </span>{original_language}</p>
              <p><span>Release date: </span>{release_date}</p>
            </div>
            <div className={classes.movie_info__data_box_items}>
              <p><span>Popularity: </span>{popularity}</p>
              <p><span>Vote average: </span>{vote_average}</p>
              <p><span>Vote count: </span>{vote_count}</p>
            </div>
          </div>
          <div className={classes.overview_wrapper}>
            <span>Overview:</span>
            <p className={classes.text_overview}>{overview}</p>
          </div>
        </div>
      </div>
      <MovieForm submitForm={setMovieList} />
    </div>
  );
}
