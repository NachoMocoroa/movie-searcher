import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { searchMovies } from '../redux/actions/data';
import { MovieResult, MoviesData } from '../models/models';
import { movieDefault, TEXTS } from '../constants/constants';

import Typography from '@mui/material/Typography';
import SearchForm from '../components/SearchForm/SearchForm';
import GalleryGrid from '../components/GalleryGrid/GalleryGrid';
import Loading from '../components/Loading/Loading';
import ErrorCard from '../components/ErrorCard/ErrorCard';
import Modal from '../components/Modal/Modal';
import MovieInfo from '../components/MovieInfo/MovieInfo';

export default function Search() {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [movieInformation, setMovieInformation] = useState<MovieResult>(movieDefault);
  const { searches, isLoading, isError, error } = useSelector((state: MoviesData) => state.searches);
  const dispatch: AppDispatch = useDispatch();

  const setModalInfo = (data: MovieResult) => {
    setModalOpen(!modalOpen);
    setMovieInformation(data);
  };

  const setSearch = (param: string) => {
    dispatch(searchMovies(param));
  };

  const setModalVisiblity = (value: boolean) => {
    setModalOpen(value);
  };

  const getMovieChildren = () => {
    if (movieInformation) {
      return (<MovieInfo data={movieInformation}  setModalState={setModalVisiblity} />);
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
        {TEXTS.SECTIONS.SEARCH.title}
      </Typography>
      <Typography 
        align="center" 
        sx={{ color: '#FFFFFF', margin: '0 0 1em 0', fontSize: '1.6rem' }}
      >
        {TEXTS.SECTIONS.SEARCH.text}
      </Typography>
      <SearchForm submitSearch={setSearch} />
      <div>
        {isLoading && <Loading />}
        {!isLoading && isError && <ErrorCard data={error} />}
        {!isLoading && !isError && searches && (
          <>
            <GalleryGrid data={searches} retrieveItem={setModalInfo} />
            <Modal 
              isModalOpen={modalOpen} 
              setModalState={setModalVisiblity} 
              textTitle={TEXTS.SECTIONS.SEARCH.modal_title} 
              childrenBody={getMovieChildren()} 
            />
          </>
        )}
      </div>
    </section>
  );
}
