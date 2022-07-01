import { useDispatch, useSelector } from 'react-redux';
import { saveMovieList, updateMovieList } from '../../redux/actions/data';
import { AppDispatch } from '../../redux/store';
import { MovieResult, MovieList, MovieFormParams, MoviesData } from '../../models/models';
import { cloneObject, copyObject, updateObjectInArrayByProp } from '../../utils/utils';
import { 
  DisplayColumn, 
  DisplayRow, 
  CardWrapper, 
  CardContentWrapper, 
  CardImage, 
  CardTitle, 
  InfoText, 
  InfoTextComment 
} from "./MovieInfoStyles";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MovieForm from './MovieForm/MovieForm';
import InfoTextItem from '../InfoTextItem/InfoTextItem';

interface Props {
  data: MovieResult | any;
  setModalState: Function;
  canDelete?: boolean;
}

export default function MovieInfo({ data, setModalState, canDelete }: Props) {
  
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

  const { moviesList } = useSelector((state: MoviesData) => state.moviesList);
  const dispatch: AppDispatch = useDispatch();

  const getPoster = () => {
    const imgUrlPrefix = `${process.env.REACT_APP_IMAGES_URL}`;
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

  const updateItemInMoviesList = (objExists: number, param: MovieFormParams) => {
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
      updateItemInMoviesList(objExists, param);
    }
  };

  const deleteMovieItemFromList = () => {
    const moviesListCloned = cloneObject(moviesList);
    return moviesListCloned.filter((item: MovieList) => item.movie.id !== data.id);
  };

  const onDeleteClick = () => {
    const newMoviesList = deleteMovieItemFromList();
    dispatch(updateMovieList(newMoviesList));
    setModalState(false);
  };

  return (
    <Card sx={CardWrapper}>
      <Box sx={CardContentWrapper}>
        <CardMedia
          component="img"
          sx={CardImage}
          image={getPoster()}
          alt={title}
        />
        <CardContent sx={DisplayColumn}>
          <Typography sx={CardTitle} gutterBottom>
            {title}
          </Typography>
          <Box sx={DisplayRow}>
            <Box sx={InfoText}>
              <InfoTextItem translation="info-original_title" data={original_title} />
              <InfoTextItem translation="info-original_language" data={original_language} />
              <InfoTextItem translation="info-release_date" data={release_date} />
            </Box>
            <Box sx={InfoText}>
              <InfoTextItem translation="info-popularity" data={popularity} />
              <InfoTextItem translation="info-vote_average" data={vote_average} />
              <InfoTextItem translation="info-vote_count" data={vote_count} />
            </Box>
          </Box>
          <Box sx={InfoTextComment}>
            <InfoTextItem data={overview} />
          </Box>
        </CardContent>
      </Box>
      <Box sx={CardContentWrapper}>
        <MovieForm 
          deleteButton={canDelete} 
          actionDelete={onDeleteClick} 
          submitForm={checkMovieList} 
        />
      </Box>
    </Card>
  );
}
