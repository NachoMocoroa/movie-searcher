import { useSelector } from "react-redux";
import { MoviesData } from "../models/models";
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
      <h2 className="section-text-header">My List</h2>
      <p className="section-text-header">Here is your Movies list that you previously selected, click on the cards to edit or to delete the movie selected.</p>
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
