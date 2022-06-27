import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MoviesData } from '../models/models';
import { NAVIGATION } from '../constants/constants';
import { 
  HeaderComponent, 
  NavigationWrapper, 
  LogoHeader, 
  MenuButtonIcon, 
  ToolbarStyles, 
  NavigationMobile, 
  NavigationDesktop, 
  BadgeBox 
} from './layoutStyles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import TopButton from '../components/TopButton/TopButton';
import LanguageSelector from '../languages/components/LanguageSelector';
import { Translation } from '../languages/components/Translation';

export default function HeaderApp() {

  const scrollEvent = 'scroll';
  const headerOffset = 150;
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { moviesList } = useSelector((state: MoviesData) => state.moviesList);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const setIsActiveLink = (param: boolean) => {
    return param ? 'link_active' : '';
  };
  
  const handleScroll = (): void => {
    let posPageY = window.pageYOffset;
    setShowTopBtn(posPageY > headerOffset);
  };

  useEffect(()=> {
    window.addEventListener(scrollEvent, handleScroll);
    return(() => {
      window.removeEventListener(scrollEvent, handleScroll);
    });
  });

  const drawer = (
    <ul className="navList">
      <li>
        <NavLink to={NAVIGATION.HOME.path} className={({ isActive }) => setIsActiveLink(isActive)}>
          <Translation>navigation-home</Translation>
        </NavLink>
      </li>
      <li>
        <NavLink to={NAVIGATION.SEARCH.path} className={({ isActive }) => setIsActiveLink(isActive)}>
          <Translation>navigation-search</Translation>
        </NavLink>
      </li>
      <li>
        <NavLink to={NAVIGATION.MY_LIST.path} className={({ isActive }) => setIsActiveLink(isActive)}>
          <Translation>navigation-list</Translation>
          {(moviesList && 
            <Box
              component="span"
              sx={BadgeBox}
            >{moviesList.length}</Box>
          )}
        </NavLink>
      </li>
    </ul>
  );

  return (
    <Box
      component="header"
      sx={HeaderComponent}
    >
      <TopButton showTopBtn={showTopBtn} />
      <Toolbar sx={ToolbarStyles}>
        <NavLink to={NAVIGATION.HOME.path}>
          <Typography variant="h1" noWrap component="h1" sx={LogoHeader}>
            <Translation>logo</Translation>
          </Typography>
        </NavLink>
        <IconButton 
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={MenuButtonIcon}
        >
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Toolbar>
      <Box
        component="nav" 
        sx={NavigationWrapper} 
        aria-label="navigation"
      >
        <Drawer 
          variant="temporary" 
          anchor="right" 
          sx={NavigationMobile} 
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={NavigationDesktop}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <LanguageSelector />
    </Box>
  );
}
