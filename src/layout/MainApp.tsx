import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mainMarginTop } from './layoutConstants';

import Box from '@mui/material/Box';
import FadeWrapper from '../components/Atoms/FadeWrapper/FadeWrapper';

const MainBox = (() => ({
  width: '100%',
  maxWidth: '100rem',
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
    <FadeWrapper fadeEffect={location === previousLocation}>
      <Box
        component="main" 
        aria-label="main" 
        sx={MainBox}
      >{children}</Box>
    </FadeWrapper>
  );
}
