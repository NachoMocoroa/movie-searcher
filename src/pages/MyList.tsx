import { useSelector } from "react-redux";
import { MoviesData } from "../models/models";

export default function MyList() {
  
  const { moviesList } = useSelector((state: MoviesData) => state);
  console.log('moviesList: ', moviesList);
  
  return (
    <section>
      <h2 className="section-text-header">My List</h2>
    </section>
  );
}
