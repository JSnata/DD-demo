import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw Error('useAppContext must be used inside an AppContextProvider');
  }

  return context;
};

export default useAppContext;
