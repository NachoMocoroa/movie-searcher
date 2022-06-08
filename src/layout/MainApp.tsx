import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from './MainApp.module.scss';

interface Props {
  children: ReactNode
}

export default function MainApp({ children }: Props) {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location);
  
  const getFadeEffect = () => {
    return location === previousLocation ? classes.fadeIn : '';
  };

  useEffect(() => {
    if (location !== previousLocation) setPreviousLocation(location);
  }, [location, previousLocation]);

  return (
    <div className={`${classes.main_wrapper} ${getFadeEffect()}`}>
      <main className={classes.main}>{children}</main>
    </div>
  );
}
