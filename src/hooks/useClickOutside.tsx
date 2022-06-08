import { useEffect } from 'react';

const useClickOutside = (ref: any, clickOutside?: any) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        clickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref]);
};

export default useClickOutside;
