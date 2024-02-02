import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Notification from '../../UI/Notification/Notification';
import UserNav from '../UserNav/UserNav';
import useAuthContext from '../../custom-hooks/useAuthContext';
import SecondaryButton from '../../UI/Buttons/SecondaryButton';
import s from './MainHeader.module.css';
import useAppContext from '../../custom-hooks/useAppContext';
import Logo from '../Logo/Logo';

function MainHeader() {
  const { user } = useAuthContext();
  const { dispatch, isMenuOpen } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
    dispatch({ type: 'SET_MENU_STATUS', payload: !menuOpen });
  };

  useEffect(() => {
    setMenuOpen(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className={s.main_header}>
      <div className={s.main_wrapper}>
        <div className={s.logo_wrapper}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              margin: '0px',
              backgroundColor: 'var(--color-primary-light)',
            }}
          >
            {menuOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          {!menuOpen && <Logo />}
        </div>
        <div className={s.auth_nav}>
          {user && <Notification />}
          {!user && <SecondaryButton link="/login">Login</SecondaryButton>}
          {!user && <SecondaryButton link="/register">Sign up</SecondaryButton>}
          {user && <UserNav userId={user.uid} />}
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
