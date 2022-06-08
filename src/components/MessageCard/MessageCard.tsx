import { Message } from '../../models/models';
import classes from './MessageCard.module.scss';

interface Props {
  data: Message
}

export default function MessageCard({ data }: Props) {
  
  const { title, text } = data;
  
  return (
    <div className={classes.message_wrapper}>
      <div className={classes.message_card}>
        <div className={classes.message_title}>{title}</div>
        <div className={classes.message_text}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
