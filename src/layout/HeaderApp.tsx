import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MoviesData } from '../models/models';
import { NAVIGATION } from '../constants/constants';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import TopButton from '../components/TopButton/TopButton';
import LanguageSelector from '../languages/components/LanguageSelector';
import { Translation } from '../languages/components/Translation';

const drawerWidth = 270;
const headerHeight = '5rem';
const headerBgColor = '#333333';
const linkColor = '#FFE400';
const linkActiveColor = '#FFFFFF';
const badgeBgColor = '#CC2062';

const HeaderComponent = (() => ({
  position: 'fixed',
  width: '100%',
  height: headerHeight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: headerBgColor,
  padding: '0 10%',
  zIndex: '1',
  '& .header_items': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .logo': {
      fontSize: '2em',
      color: '#FFFFFF',
      fontSeight: 'bold',
    },
  },
}));

const NavigationWrapper = (() => ({
  position: { xs: 'absolute', md: 'unset' },
  top: { xs: 0, md: 'unset' },
  left: { xs: 0, md: 'unset' },
  width: { xs: drawerWidth, md: '100%' }, 
  backgroundColor: headerBgColor,
}));

const LogoHeader = (() => ({
  fontSize: '2em',
  color: '#FFFFFF',
  fontWeight: 'bold',
}));

const MenuButtonIcon = (() => ({
  display: { md: 'none' },
  color: '#FFFFFF',
  fontSize: '24px',
}));

const ToolbarStyles = (() => ({
  justifyContent: 'space-between',
  width: '100%',
}));

const NavigationMobile = (() => ({
  display: { xs: 'block', md: 'none' },
  width: drawerWidth,
  '& .MuiPaper-root.MuiDrawer-paper': {
    boxSizing: 'border-box', 
    width: drawerWidth,
    backgroundColor: headerBgColor,
    '& .navList': {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      margin: `${headerHeight} 0 0 0`,
      alignItems: 'flex-end',
      padding: '0 20px',
      '& li': {
        margin: '10px 0',
        padding: '0.5rem 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottom: `3px dotted ${linkColor}`,
        '&:first-of-type': {
          margin: '0 0 10px 0',
        },
        '&:last-of-type': {
          margin: '10px 0 0 0',
        },
        '& a': {
          textDecoration: 'none',
          fontSize: '1.25em',
          lineHeight: '1',
          color: linkColor, 
          '&:hover, &:active, &.active, &.link-active, &.link_active, &[class*="link_active"]': {
            color: linkActiveColor,
          }
        },
      },
    },
  },
}));

const NavigationDesktop = (() => ({
  display: { xs: 'none', md: 'flex' },
  width: '100%',
  '& .MuiPaper-root.MuiDrawer-paper': {
    position: 'unset',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    '& .navList': {
      listStyle: 'none',
      margin: '0',
      padding: '0',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      overflow: 'hidden',
      '& li': {
        margin: '0 0 0 2rem',
        '&:first-of-type': {
          margin: '0',
        },
        '&:last-of-type': {
          margin: '0 0 0 2rem',
        },
        '& a': {
          textDecoration: 'none',
          fontSize: '1.25em',
          lineHeight: '1',
          color: linkColor,
          '&:hover, &:active, &.active, &.link-active, &.link_active, &[class*="link_active"]': {
            color: linkActiveColor,
          }
        },
      },
    },
  },
}));

const BadgeBox = (() => ({
  backgroundColor: badgeBgColor,
  color: '#FFFFFF',
  marginLeft: '0.5rem',
  borderRadius: '50%',
  padding: '0',
  fontSize: '1.5rem',
  width: '23px',
  height: '23px',
  lineHeight: '1.2',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

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
