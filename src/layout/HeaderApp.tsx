import { headerHeight, headerBgColor } from './layoutConstants';

import Box from '@mui/material/Box';
import Navigation from './Navigation/Navigation';
import TopButton from '../components/Atoms/TopButton/TopButton';
import LanguageSelector from '../languages/components/LanguageSelector';

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

export default function HeaderApp() {

  return (
    <Box
      component="header"
      sx={HeaderComponent}
    >
      <TopButton />
      <Navigation />
      <LanguageSelector />
    </Box>
  );
}
