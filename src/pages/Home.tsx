import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { requestMovies } from '../redux/actions/data';
import { MoviesData, MovieResult } from '../models/models';
import { movieDefault } from '../constants/constants';

import Typography from '@mui/material/Typography';
import GalleryGrid from '../components/GalleryGrid/GalleryGrid';
import Loading from '../components/Loading/Loading';
import ErrorCard from '../components/ErrorCard/ErrorCard';
import Modal from '../components/Modal/Modal';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import { Translation } from '../languages/components/Translation';

export default function Home() {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [movieInformation, setMovieInformation] = useState<MovieResult>(movieDefault);
  const { movies, isLoading, isError, error } = useSelector((state: MoviesData) => state.movies);
  const dispatch: AppDispatch = useDispatch();

  const setModalInfo = (data: MovieResult) => {
    setModalOpen(!modalOpen);
    setMovieInformation(data);
  };

  const setModalVisiblity = (value: boolean) => {
    setModalOpen(value);
  };

  const getMovieChildren = () => {
    if (movieInformation) {
      return (<MovieInfo data={movieInformation} setModalState={setModalVisiblity} />);
    } else {
      return null;
    }
  };

  const initFetch = useCallback(() => {
    dispatch(requestMovies());
  }, [dispatch]);
  
  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <section>
      {isLoading && <Loading />}
      {!isLoading && isError && <ErrorCard data={error} />}
      {!isLoading && !isError && movies && (
        <>
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ color: '#FFFFFF', margin: '0 0 1em 0' }}
          >
            <Translation>header-home</Translation>
          </Typography>
          <GalleryGrid data={movies} retrieveItem={setModalInfo} />
          <Modal 
            isModalOpen={modalOpen} 
            setModalState={setModalVisiblity} 
            childrenBody={getMovieChildren()} 
          />
        </>
      )}
    </section>
  );
}
