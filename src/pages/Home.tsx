import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { requestMovies } from "../redux/action";
import { NAVIGATION } from "../constants/constants";

export default function Home() {
  
  const { moviesData } = useSelector((state: any) => state);
  console.log('moviesData: ', moviesData);
  
  const dispatch: AppDispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(requestMovies());
  }, [dispatch]);
  
  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <section>
      <h1>{NAVIGATION.HOME.text}</h1>
    </section>
  );
}
