import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MoviesData } from "../models/models";
import classes from "./HeaderApp.module.scss";
import { NAVIGATION, TEXTS } from "../constants/constants";

import TopButton from "../components/TopButton/TopButton";
import MenuButton from "../components/MenuButton/MenuButton";

export default function HeaderApp() {

  const scrollEvent = 'scroll';
  const headerOffset = 150;
  const linkActiveClassName = classes.link_active;
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const { moviesList } = useSelector((state: MoviesData) => state);
  
  const handleScroll = () => {
    let posPageY = window.pageYOffset;
    setShowTopBtn(posPageY > headerOffset);
  };

  useEffect(()=> {
    window.addEventListener(scrollEvent, handleScroll);
    return(() => {
      window.removeEventListener(scrollEvent, handleScroll);
    });
  });

  return (
    <header className={classes.header}>
      <TopButton showTopBtn={showTopBtn} />
      <div className={classes.header_items}>
        <div className={classes.logo}>{TEXTS.LOGO.text}</div>
        <MenuButton menuClicked={setIsMenuClicked} isMenuOpen={isMenuClicked} />
      </div>
      <nav className={`${isMenuClicked ? '' : classes.menu_hidden}`}>
        <ul>
          <li>
            <NavLink to={NAVIGATION.HOME.path} className={({ isActive }) => isActive ? linkActiveClassName : undefined}>{NAVIGATION.HOME.text}</NavLink>
          </li>
          <li>
            <NavLink to={NAVIGATION.SEARCH.path} className={({ isActive }) => isActive ? linkActiveClassName : undefined}>{NAVIGATION.SEARCH.text}</NavLink>
          </li>
          <li>
            <NavLink to={NAVIGATION.MY_LIST.path} className={({ isActive }) => isActive ? linkActiveClassName : undefined}>
              {NAVIGATION.MY_LIST.text}
              {(moviesList && <span className={classes.badge}>{moviesList.length}</span>)}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
