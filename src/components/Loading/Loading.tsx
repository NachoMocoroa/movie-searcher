import classes from './Loading.module.scss';

export default function Loading() {

  return (
    <div className={classes.loading}>
      <img src='./images/loading.gif' alt='Loading' />
    </div>
  );
}
