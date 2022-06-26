import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MovieList, MovieResult, MoviesData } from '../models/models';
import { movieDefault, TEXTS } from '../constants/constants';

import Typography from '@mui/material/Typography';
import MoviesList from '../components/MoviesList/MoviesList';
import ErrorCard from '../components/ErrorCard/ErrorCard';
import Loading from '../components/Loading/Loading';
import Modal from '../components/Modal/Modal';
import MovieInfo from '../components/MovieInfo/MovieInfo';

export default function MyList() {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [movieInformation, setMovieInformation] = useState<MovieResult>(movieDefault);
  const { moviesList, isLoading, isError, error } = useSelector((state: MoviesData) => state.moviesList);
  
  const setModalInfo = (data: MovieList) => {
    setModalOpen(!modalOpen);
    setMovieInformation(data.movie);
  };

  const setModalVisiblity = (value: boolean) => {
    setModalOpen(value);
  };

  const getMovieChildren = () => {
    if (movieInformation) {
      return (
        <MovieInfo 
          data={movieInformation} 
          setModalState={setModalVisiblity} 
          canDelete={true} 
        />
      );
    } else {
      return null;
    }
  };
  
  return (
    <section>
      <Typography 
        variant="h2" 
        align="center" 
        sx={{ color: '#FFFFFF', margin: '0 0 1rem 0' }}
      >
        {TEXTS.SECTIONS.MY_LIST.title}
      </Typography>
      <Typography 
        align="center" 
        sx={{ color: '#FFFFFF', margin: '0 0 1em 0', fontSize: '1.6rem' }}
      >
        {TEXTS.SECTIONS.MY_LIST.text}
      </Typography>
      <div>
        {isLoading && <Loading />}
        {!isLoading && isError && <ErrorCard data={error} />}
        {!isLoading && !isError && moviesList && (
          <>
            <MoviesList data={moviesList} retrieveItem={setModalInfo} />
            <Modal 
              isModalOpen={modalOpen} 
              setModalState={setModalVisiblity} 
              textTitle="Movie info" 
              childrenBody={getMovieChildren()} 
            />
          </>
        )}
      </div>
    </section>
  );
}
