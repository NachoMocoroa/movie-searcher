import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { requestMovies } from "../redux/action";
import { MoviesData, MovieResult } from '../models/models';
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import Loading from "../components/Loading/Loading";
import ErrorCard from "../components/ErrorCard/ErrorCard";
import Modal from "../components/Modal/Modal";
import MovieInfo from "../components/MovieInfo/MovieInfo";

const movieDefault = {
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: 0,
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0
};

export default function Home() {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [movieInformation, setMovieInformation] = useState<MovieResult>(movieDefault);
  const { moviesData, isLoading, isError, error } = useSelector((state: MoviesData) => state);
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
      {!isLoading && !isError && moviesData && (
        <>
          <h2 className="section-text-header">The most popular</h2>
          <GalleryGrid data={moviesData} retrieveItem={setModalInfo} />
          <Modal 
            isModalOpen={modalOpen} 
            setModalState={setModalVisiblity} 
            textTitle="Movie info" 
            childrenBody={getMovieChildren()} 
          />
        </>
      )}
    </section>
  );
}
