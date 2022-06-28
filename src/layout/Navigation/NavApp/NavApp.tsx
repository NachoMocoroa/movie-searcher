import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../../constants/constants';
import { 
  NavigationWrapper, 
  NavigationMobile, 
  NavigationDesktop, 
  BadgeBox 
} from './navAppStyles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Translation } from '../../../languages/components/Translation';

interface LinkItem {
  path: string;
  translation: string;
}

interface Props {
  navOpen: boolean;
  navHandleToggle: any;
  moviesLength: number;
}

const navMenuItems: LinkItem[] = [
  {
    path: NAVIGATION.HOME.path,
    translation: 'navigation-home'
  }, 
  {
    path: NAVIGATION.SEARCH.path,
    translation: 'navigation-search'
  }, 
  {
    path: NAVIGATION.MY_LIST.path,
    translation: 'navigation-list'
  }
];

export default function NavApp({ navOpen, navHandleToggle, moviesLength }: Props) {

  const setIsActiveLink = (param: boolean) => {
    return param ? 'link_active' : '';
  };

  const drawer = (linksItems: LinkItem[]): React.ReactNode => (
    <ul className="navList">
      {linksItems.map((item, index) => (
        <li key={`link-${item.path}-${index}`}>
          <NavLink 
            to={item.path} 
            className={({ isActive }) => setIsActiveLink(isActive)}
          >
            <Translation>{item.translation}</Translation>
            {index === linksItems.length - 1 && 
              <Box
                component="span"
                sx={BadgeBox}
              >{moviesLength}</Box>
            }
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <Box
      component="nav" 
      sx={NavigationWrapper} 
      aria-label="navigation"
    >
      <Drawer 
        variant="temporary" 
        anchor="right" 
        sx={NavigationMobile} 
        open={navOpen}
        onClose={navHandleToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer(navMenuItems)}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={NavigationDesktop}
        open
      >
        {drawer(navMenuItems)}
      </Drawer>
    </Box>
  );
}
