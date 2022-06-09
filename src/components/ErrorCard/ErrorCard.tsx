import { MoviesErrorJSON } from '../../models/models';
import classes from './ErrorCard.module.scss';
import { TEXTS } from '../../constants/constants';

interface Props {
  data: MoviesErrorJSON
}

export default function ErrorCard({ data }: Props) {
  
  const { status_code, status_message } = data;
  
  return (
    <div className={classes.error_wrapper}>
      <div className={classes.error_card}>
        <div className={classes.error_strip}>{TEXTS.ERROR.status_code}</div>
        <div className={classes.error_message}>
          <p><span>{TEXTS.ERROR.status_code}</span> {status_code}</p>
          <p><span>{TEXTS.ERROR.message}</span> {status_message}</p>
        </div>
      </div>
    </div>
  );
}
