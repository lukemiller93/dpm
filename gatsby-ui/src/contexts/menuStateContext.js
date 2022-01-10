import React, { ReactChildren, useState } from 'react';

const MenuStateContext = React.createContext([{}, () => {}]);
const MenuStateProvider = ({ children }) => {
  const [state, setState] = useState({
    isMenuOpen: false,
    browserWidth: 0,
  });

  return <MenuStateContext.Provider>{children}</MenuStateContext.Provider>;
};

export { MenuStateContext, MenuStateProvider };
