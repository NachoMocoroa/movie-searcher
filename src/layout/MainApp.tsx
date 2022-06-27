import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { MainBox } from './layoutStyles';

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
        sx={MainBox} 
        aria-label="main"
      >{children}</Box>
    </Fade>
  );
}
