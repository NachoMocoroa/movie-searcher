import classes from './MenuButton.module.scss';

interface Props {
  menuClicked: Function;
  isMenuOpen: boolean;
}

export default function MenuButton({ menuClicked, isMenuOpen }: Props) {

  const classMenuClicked = isMenuOpen ? classes.opened : '';

  const toggleMenu = () => {
    menuClicked(!isMenuOpen);
  };

  return (
    <div 
      className={`${classes.menu_btn} ${classMenuClicked}`} 
      onClick={() => toggleMenu()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
