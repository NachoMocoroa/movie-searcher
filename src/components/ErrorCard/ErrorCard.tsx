import { MoviesErrorJSON } from '../../models/models';
import classes from './ErrorCard.module.scss';

interface Props {
  data: MoviesErrorJSON
}

export default function ErrorCard({ data }: Props) {
  
  const { status_code, status_message } = data;
  
  return (
    <div className={classes.error_wrapper}>
      <div className={classes.error_card}>
        <div className={classes.error_strip}>Error</div>
        <div className={classes.error_message}>
          <p><span>Status code:</span> {status_code}</p>
          <p><span>Message:</span> {status_message}</p>
        </div>
      </div>
    </div>
  );
}
