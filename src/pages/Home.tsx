import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { requestMovies } from "../redux/action";
import { MoviesData } from '../models/models';
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import Loading from "../components/Loading/Loading";
import ErrorCard from "../components/ErrorCard/ErrorCard";

export default function Home() {
  
  const { moviesData, isLoading, isError, error } = useSelector((state: MoviesData) => state);
  
  const dispatch: AppDispatch = useDispatch();

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
      {!isLoading && !isError && moviesData && <GalleryGrid data={moviesData} />}
    </section>
  );
}
