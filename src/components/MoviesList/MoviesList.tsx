import MoviesListItem from './MoviesListItem/MoviesListItem';
import MessageCard from '../MessageCard/MessageCard';
import classes from './MoviesList.module.scss';
import { MovieResult } from '../../models/models';
import { TEXTS } from "../../constants/constants";

interface Props {
  data: any;
  retrieveItem: Function;
}

export default function MoviesList({ data, retrieveItem }: Props) {

  const dataMessage = {
    title: TEXTS.NO_RESULTS.title,
    text: TEXTS.NO_RESULTS.text
  };

  const getData = (item: MovieResult) => {
    retrieveItem(item);
  };

  return (
    <>
      {(data && data.length > 0) ? 
        (<div className={classes.movies_list_grid}>
          {data.map((item: any, index: number) => (
            <MoviesListItem 
              key={`film-${index}`}
              data={item} 
              retrieveData={getData} 
            />
          ))}
        </div>)
        :(<MessageCard data={dataMessage} />)
      }
    </>
  );
}
