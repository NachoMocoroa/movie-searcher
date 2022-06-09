import { useSelector } from "react-redux";
import { MoviesData } from "../models/models";
import { TEXTS } from "../constants/constants";

import MoviesList from "../components/MoviesList/MoviesList";
import ErrorCard from "../components/ErrorCard/ErrorCard";
import Loading from "../components/Loading/Loading";

export default function MyList() {
  
  const { moviesList, isLoading, isError, error } = useSelector((state: MoviesData) => state);

  const setModalInfo = (data: any) => {
    console.log('data: ', data);
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
          </>
        )}
      </div>
    </section>
  );
}
