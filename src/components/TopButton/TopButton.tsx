import classes from './TopButton.module.scss';

interface Props {
  showTopBtn: boolean
}

export default function TopButton({ showTopBtn }: Props) {

  const topBtnVisibleClass = showTopBtn ? classes.top_button_visible : '';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={() => scrollToTop()} 
      className={`${classes.top_button} ${topBtnVisibleClass}`}
    ></button>
  );
}
