import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

const mainMarginTop = '6rem';

const mainBox = (() => ({
  width: '100%',
  maxWidth: '100rem',
  height: '100%',
  minHeight: `calc(100vh - (${mainMarginTop} + 3rem))`,
  margin: `${mainMarginTop} auto 3rem auto`,
  padding: '0 2rem',
}));

interface Props {
  children: ReactNode;
}

export default function MainApp({ children }: Props) {

  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(() => {
    if (location !== previousLocation) setPreviousLocation(location);
  }, [location, previousLocation]);

  return (
    <Fade 
      in={location === previousLocation} 
      appear 
      unmountOnExit 
      timeout={2000} 
    >
      <Box
        component="main" 
        sx={mainBox} 
        aria-label="main"
      >{children}</Box>
    </Fade>
  );
}
