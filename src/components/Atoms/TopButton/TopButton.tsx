import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const topButtonStyles = (() => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '7px',
  height: '40px',
  width: '40px',
  borderRadius: '50%',
  border: 'none',
  boxShadow: '0 0 10px rgb(0 0 0 / 5%)',
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  color: '#FFFFFF',
  zIndex: 1,
  transition: 'opacity .3s, visibility .3s, background-color .3s',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
}));

export default function TopButton() {

  const scrollEvent = 'scroll';
  const headerOffset = 150;
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
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

  return (
    <IconButton 
      type="button" 
      sx={topButtonStyles} 
      style={{
        visibility: showTopBtn ? 'visible' : 'hidden',
        opacity: showTopBtn ? 1 : 0
      }} 
      onClick={() => scrollToTop()}
    >
      <ExpandLessIcon sx={{ fontSize: 30 }} />
    </IconButton>
  );
}
