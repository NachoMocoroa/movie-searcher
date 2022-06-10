import { useState } from "react";
import { useSelector } from "react-redux";
import { MovieList, MovieResult, MoviesData } from "../models/models";
import { movieDefault, TEXTS } from "../constants/constants";

import MoviesList from "../components/MoviesList/MoviesList";
import ErrorCard from "../components/ErrorCard/ErrorCard";
import Loading from "../components/Loading/Loading";
import Modal from "../components/Modal/Modal";
import MovieInfo from "../components/MovieInfo/MovieInfo";

export default function MyList() {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [movieInformation, setMovieInformation] = useState<MovieResult>(movieDefault);
  const { moviesList, isLoading, isError, error } = useSelector((state: MoviesData) => state);

  const setModalInfo = (data: MovieList) => {
    setModalOpen(!modalOpen);
    setMovieInformation(data.movie);
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
  
  return (
    <section>
      <h2 className="section-text-header">{TEXTS.SECTIONS.MY_LIST.title}</h2>
      <p className="section-text-header">{TEXTS.SECTIONS.MY_LIST.text}</p>
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
