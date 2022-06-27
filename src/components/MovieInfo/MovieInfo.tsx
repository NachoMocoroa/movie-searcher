import { useDispatch, useSelector } from 'react-redux';
import { saveMovieList, updateMovieList } from '../../redux/actions/data';
import { AppDispatch } from '../../redux/store';
import { MovieResult, MovieList, MovieFormParams, MoviesData } from '../../models/models';
import { cloneObject, copyObject, updateObjectInArrayByProp } from '../../utils/utils';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MovieForm from './MovieForm/MovieForm';
import { Translation } from '../../languages/components/Translation';

interface Props {
  data: MovieResult | any;
  setModalState: Function;
  canDelete?: boolean;
}

const DisplayColumn = (() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0',
}));

const DisplayRow = (() => ({
  display: 'flex',
  flexDirection: 'row',
  margin: '0',
  padding: '0',
}));

const CardWrapper = (() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0',
  padding: '0',
  boxShadow: 'unset',
}));

const CardContentWrapper = (() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
}));

const CardTitle = (() => ({
  width: '100%',
  margin: '0',
  padding: '1rem 1rem 0.5rem 1rem',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#ffffff',
  backgroundColor: '#666666',
}));

const InfoText = (() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5rem 0',
  padding: '0 1rem',
  '& .MuiTypography-root': {
    fontSize: '1.25rem',
    color: '#3333333',
    '& span': {
      marginRight: '0.5rem',
      fontWeight: '700',
    },
  },
}));

const InfoTextComment = (() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5rem 0',
  padding: '0 1rem',
  '& .MuiTypography-root': {
    fontSize: '1.25rem',
    color: '#3333333',
    maxHeight: '100px',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
}));

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
          height="200"
          image={getPoster()}
          alt={title}
        />
        <CardContent sx={DisplayColumn}>
          <Typography sx={CardTitle} gutterBottom>
            {title}
          </Typography>
          <Box sx={DisplayRow}>
            <Box sx={InfoText}>
              <Typography>
                <span>
                  <Translation>info-original_title</Translation>
                </span>
                {original_title}
              </Typography>
              <Typography>
                <span>
                  <Translation>info-original_language</Translation>
                </span>
                {original_language}
              </Typography>
              <Typography>
                <span>
                  <Translation>info-release_date</Translation>
                </span>
                {release_date}
              </Typography>
            </Box>
            <Box sx={InfoText}>
              <Typography>
                <span>
                  <Translation>info-popularity</Translation>
                </span>
                {popularity}
              </Typography>
              <Typography>
                <span>
                  <Translation>info-vote_average</Translation>
                </span>
                {vote_average}
              </Typography>
              <Typography>
                <span>
                  <Translation>info-vote_count</Translation>
                </span>
                {vote_count}
              </Typography>
            </Box>
          </Box>
          <Box sx={InfoTextComment}>
            <Typography>{overview}</Typography>
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
