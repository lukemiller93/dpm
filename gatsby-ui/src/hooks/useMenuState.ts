import { useContext, useLayoutEffect, useState } from 'react';
import { MenuStateContext } from '../contexts/menuStateContext';

const useMenuState = (): {
  toggleMenu: () => void;
  closeMenu: () => void;
  isMenuOpen: boolean;
  browserWidth: number;
  browserHeight: number;
} => {
  const { state, setState } = useContext(MenuStateContext);
  // toggle menu visibility
  function toggleMenu() {
    setState((prevState) => ({ ...prevState, isMenuOpen: !state.isMenuOpen }));
  }

  function closeMenu() {
    setState((prevState) => ({ ...prevState, isMenuOpen: false }));
  }

  // Get current size of browser
  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useLayoutEffect(() => {
      if (!isClient) return;

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });
    return windowSize;
  }

  return {
    toggleMenu,
    closeMenu,
    isMenuOpen: state.isMenuOpen,
    browserWidth: useWindowSize().width || 0,
    browserHeight: useWindowSize().height || 0,
  };
};

export default useMenuState;
