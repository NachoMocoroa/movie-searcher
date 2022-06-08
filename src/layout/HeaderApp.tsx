import { NavLink } from "react-router-dom";
import classes from "./HeaderApp.module.scss";
import { NAVIGATION, TEXTS } from "../constants/constants";

export default function HeaderApp() {

  const linkActiveClassName = classes.link_active;

  return (
    <header className={classes.header}>
      <div className={classes.header_items}>
        <div className={classes.logo}>{TEXTS.LOGO.text}</div>
      </div>
      <nav>
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
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
