import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { requestMovies } from "../redux/action";
import { MoviesData, MovieResult } from '../models/models';
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import Loading from "../components/Loading/Loading";
import ErrorCard from "../components/ErrorCard/ErrorCard";
import Modal from "../components/Modal/Modal";

export default function Home() {
  
  const [modalOpen, setModalOpen] = useState(false);
  const { moviesData, isLoading, isError, error } = useSelector((state: MoviesData) => state);
  const dispatch: AppDispatch = useDispatch();

  const setModalInfo = (data: MovieResult) => {
    console.log('data: ', data);
    setModalOpen(!modalOpen);
  };

  const setModalVisiblity = (value: boolean) => {
    setModalOpen(value);
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
          <GalleryGrid data={moviesData} retrieveItem={setModalInfo} />
          <Modal isModalOpen={modalOpen} setModalState={setModalVisiblity} />
        </>
      )}
    </section>
  );
}
