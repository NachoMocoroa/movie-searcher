import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { searchMovies } from "../redux/action";
import { MovieResult, MoviesData } from "../models/models";
import { movieDefault, TEXTS } from "../constants/constants";

import SearchForm from "../components/SearchForm/SearchForm";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import Loading from "../components/Loading/Loading";
import ErrorCard from "../components/ErrorCard/ErrorCard";
import Modal from "../components/Modal/Modal";
import MovieInfo from "../components/MovieInfo/MovieInfo";

export default function Search() {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [movieInformation, setMovieInformation] = useState<MovieResult>(movieDefault);
  const { moviesSearch, isLoading, isError, error } = useSelector((state: MoviesData) => state);
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
      <h2 className="section-text-header">{TEXTS.SECTIONS.SEARCH.title}</h2>
      <p className="section-text-header">{TEXTS.SECTIONS.SEARCH.text}</p>
      <SearchForm submitSearch={setSearch} />
      <div>
        {isLoading && <Loading />}
        {!isLoading && isError && <ErrorCard data={error} />}
        {!isLoading && !isError && moviesSearch && (
          <>
            <GalleryGrid data={moviesSearch} retrieveItem={setModalInfo} />
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
