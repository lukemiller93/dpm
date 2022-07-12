import React, {
  ReactChildren,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';

export interface MenuContextState {
  isMenuOpen: boolean;
  browserWidth: number;
}

const menuCtxDefaultValue = {
  state: {
    isMenuOpen: false,
    browserWidth: 0,
  },
  setState: () => {},
};

const MenuStateContext = React.createContext<{
  state: MenuContextState;
  setState: React.Dispatch<SetStateAction<MenuContextState>>;
}>(menuCtxDefaultValue);

const MenuStateProvider = ({
  children,
}: {
  children: ReactChildren;
}): ReactElement => {
  const [state, setState] = useState<MenuContextState>(
    menuCtxDefaultValue.state
  );

  return (
    <MenuStateContext.Provider value={{ state, setState }}>
      {children}
    </MenuStateContext.Provider>
  );
};

export { MenuStateContext, MenuStateProvider };
