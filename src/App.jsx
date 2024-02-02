import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import useResizeObserver from 'use-resize-observer';
import { debounce as _debounce } from 'lodash-es';

import './App.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile/Profile';
import MainHeader from './components/MainHeader/MainHeader';
import Sidebar from './components/SideBar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import SellCar from './pages/SellCar/SellCar';
import Bookings from './pages/Booking/Bookings';

import 'remixicon/fonts/remixicon.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-circular-progressbar/dist/styles.css';
import useAuthContext from './custom-hooks/useAuthContext';
import useAppContext from './custom-hooks/useAppContext';

function App() {
  const mediaCondition = '(max-width: 1024px)';
  const { user, authIsReady } = useAuthContext();
  const { isMenuOpen: menuOpen, dispatch: setIsMenuOpen } = useAppContext();
  const { ref } = useResizeObserver({
    onResize: _debounce(() => {
      setIsMenuOpen({
        type: 'SET_MENU_STATUS',
        payload: !window.matchMedia(mediaCondition).matches,
      });
    }, 300),
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(161, 98, 247, 1)', // --color-primary-purple
      },
    },
  });

  const hideSidebarHandler = () => {
    if (window.matchMedia(mediaCondition).matches) {
      setIsMenuOpen({ type: 'SET_MENU_STATUS', payload: false });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div ref={ref} className={`main_container ${menuOpen ? '-open' : ''}`}>
        {authIsReady && (
          <>
            <MainHeader />
            <Sidebar />
            <div className="main_content" onClick={hideSidebarHandler}>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" element={<Dashboard />} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/bookings/*" element={<Bookings />} />
                <Route path="/sell-car" element={<SellCar />} />
                {user && <Route path="/settings" element={<Settings />} />}
              </Routes>
            </div>
            <ToastContainer position="bottom-right" />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
