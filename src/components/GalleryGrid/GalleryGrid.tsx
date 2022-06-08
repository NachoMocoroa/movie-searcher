import GalleryItem from './GalleryItem/GalleryItem';
import MessageCard from '../MessageCard/MessageCard';
import classes from './GalleryGrid.module.scss';
import { MoviesInfoJSON, MoviesResult } from '../../models/models';
import { TEXTS } from "../../constants/constants";

interface Props {
  data: MoviesInfoJSON
}

export default function GalleryGrid({ data }: Props) {
  
  const { results } = data;

  const dataMessage = {
    title: TEXTS.NO_RESULTS.title,
    text: TEXTS.NO_RESULTS.text
  };

  const getData = (item: MoviesResult) => {
    console.log('item: ', item);
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
