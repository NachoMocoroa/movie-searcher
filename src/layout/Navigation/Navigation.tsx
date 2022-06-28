import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MoviesData } from '../../models/models';

import NavApp from './NavApp/NavApp';
import ToolbarApp from './ToolbarApp/ToolbarApp';

export default function Navigation() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const { moviesList } = useSelector((state: MoviesData) => state.moviesList);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <ToolbarApp toolbarHandleToggle={handleDrawerToggle} />
      <NavApp 
        navOpen={mobileOpen} 
        navHandleToggle={handleDrawerToggle} 
        moviesLength={moviesList.length} 
      />
    </>
  );
}
