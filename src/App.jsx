/* eslint-disable */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Auth/Profile';
import MainHeader from './components/MainHeader/MainHeader';
import Sidebar from './components/SideBar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import SellCar from './pages/SellCar/SellCar';
import Bookings from './pages/Booking/Bookings';
import ProtectedRoute from './routers/ProtectedRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'remixicon/fonts/remixicon.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-circular-progressbar/dist/styles.css';
import useAuthContext from './custom-hooks/useAuthContext';
import useAppContext from "./custom-hooks/useAppContext";

const App = () => {
  const { user, authIsReady } = useAuthContext();
  const { isMenuOpen: menuOpen } = useAppContext();

  return (
    <div className={`main_container ${menuOpen ? '-open' : ''}`}>
      {authIsReady && (
        <>
          <MainHeader />
          <Sidebar />
          <div className="main-content">
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
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <ToastContainer position="bottom-right" />
        </>
      )}
    </div>
  );
};

export default App;
