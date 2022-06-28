import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../../constants/constants';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Translation } from '../../../languages/components/Translation';

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

interface Props {
  toolbarHandleToggle: any;
}

export default function ToolbarApp({ toolbarHandleToggle }: Props) {

  return (
    <Toolbar sx={ToolbarStyles}>
      <NavLink to={NAVIGATION.HOME.path}>
        <Typography 
          variant="h1" 
          noWrap 
          component="h1" 
          sx={LogoHeader}
        >
          <Translation>logo</Translation>
        </Typography>
      </NavLink>
      <IconButton 
        aria-label="open drawer"
        edge="end"
        onClick={toolbarHandleToggle}
        sx={MenuButtonIcon}
      >
        <MenuIcon sx={{ fontSize: 32 }} />
      </IconButton>
    </Toolbar>
  );
}
