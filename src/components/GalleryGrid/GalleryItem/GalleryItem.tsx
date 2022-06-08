import { MoviesResult } from '../../../models/models';
import classes from './GalleryItem.module.scss';

interface Props {
  data: MoviesResult;
  retrieveData: Function
}

export default function GalleryItem({ data, retrieveData }: Props) {
  
  const { poster_path, title, release_date } = data;

  const getPoster = () => {
    const imgUrlPrefix = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
    return poster_path ? `${imgUrlPrefix}${poster_path}` : './images/no-image.png';
  };

  return (
    <div 
      className={classes.gallery_item} 
      style={{ backgroundImage: `url(${getPoster()})` }} 
      onClick={() => retrieveData(data)} 
    >
      <div className={classes.data_info}>
        <p className={classes.text_title}>{title}</p>
        <p>{release_date}</p>
      </div>
    </div>
  );
}
