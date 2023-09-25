import { createContext, useReducer } from 'react';

export const AppContext = createContext();

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MENU_STATUS':
      return { isMenuOpen: action.payload };
    default:
      return state;
  }
};

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    isMenuOpen: true,
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
