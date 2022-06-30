import { ReactNode } from 'react';
import classes from './FadeWrapper.module.css';

interface Props {
  fadeEffect: boolean;
  children: ReactNode;
}

export default function FadeWrapper({ fadeEffect, children }: Props) {
  
  const getFadeEffect = () => {
    return fadeEffect ? classes.fadeIn : classes.opacity_0;
  };

  return (
    <div className={`${classes.fade_wrapper} ${getFadeEffect()}`}>
      {children}
    </div>
  );
}
