import GalleryItem from './GalleryItem/GalleryItem';
import MessageCard from '../MessageCard/MessageCard';
import classes from './GalleryGrid.module.scss';
import { MoviesInfoJSON, MovieResult, MoviesSearchJSON } from '../../models/models';
import { TEXTS } from "../../constants/constants";

interface Props {
  data: MoviesInfoJSON | MoviesSearchJSON;
  retrieveItem: Function;
}

export default function GalleryGrid({ data, retrieveItem }: Props) {
  
  const { results } = data;

  const dataMessage = {
    title: TEXTS.NO_RESULTS.title,
    text: TEXTS.NO_RESULTS.text
  };

  const getData = (item: MovieResult) => {
    retrieveItem(item);
  };

  return (
    <>
      {(results && results.length > 0) ? 
        (<div className={classes.gallery_grid}>
          {results.map((item, index) => (
            <GalleryItem 
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
