//import { MovieResult } from '../../../models/models';
import classes from './MoviesListItem.module.scss';

interface Props {
  data: any;
  retrieveData: Function;
}

export default function MoviesListItem({ data, retrieveData }: Props) {
  
  const { movie, punctuation, comments } = data;
  const { poster_path, title, release_date } = movie;

  const getPoster = () => {
    const imgUrlPrefix = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
    return poster_path ? `${imgUrlPrefix}${poster_path}` : './images/no-image.png';
  };

  return (
    <div 
      className={classes.movie_list_item}  
      onClick={() => retrieveData(data)} 
    >
      <div className={classes.movie_list__image}>
        <img src={getPoster()} alt={title} />
        </div>
      <div className={classes.data_col}>
        <div className={classes.data_info}>
          <p className={classes.text_title}>{title}</p>
          <p>{release_date}</p>
        </div>
        <div className={classes.label_text}>
          <span>Comments</span>
          <p className={classes.comments_text}>{comments}</p>
        </div>
      </div>
      <div className={classes.corner}>
        <span>{punctuation}</span>
      </div>
    </div>
  );
}
