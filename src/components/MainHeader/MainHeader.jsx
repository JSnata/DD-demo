/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
// import { signOut } from 'firebase/auth';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import Notification from '../../UI/Notification/Notification';
import useLogout from '../../custom-hooks/useLogout';
import profileImg from '../../assets/images/profile-02.png';
import UserNav from '../UserNav/UserNav';
import useAuthContext from '../../custom-hooks/useAuthContext';
import SecondaryButton from '../../UI/Buttons/SecondaryButton';
import s from './MainHeader.module.css';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useAppContext from '../../custom-hooks/useAppContext';
// import useAuth from '../../custom-hooks/useAuth';
// import { auth } from '../../firebase.config';
const userNavData = [
  {
    link: '/settings',
    title: 'Settings',
  },
  {
    link: '/profile',
    title: 'Profile',
  },
  {
    link: '',
    title: 'Logout',
  },
];

function MainHeader() {
  const { logout } = useLogout();
  const { user, authIsReady } = useAuthContext();

  const { dispatch, isMenuOpen } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
    dispatch({ type: 'SET_MENU_STATUS', payload: !menuOpen });
  };
  // const currentUser = true;
  // const { currentUser } = useAuth();
  // const navigate = useNavigate();

  return (
    <div className={s.main_header}>
      <div className={s.main_wrapper}>
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
        <div className={s.auth_nav}>
          {user && <Notification />}
          {!user && <SecondaryButton link="/login">Login</SecondaryButton>}
          {!user && <SecondaryButton link="/register">Sign up</SecondaryButton>}
          {user && (
            <UserNav
              clickHandler={logout}
              profileImg={profileImg}
              menuData={userNavData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainHeader;

// {currentUser ? (
//   <>
//     <SecondaryButton link="/profile">Profile</SecondaryButton>

//     <SecondaryButton link="/user">
//       {/* clickHandler={logout} */}
//       Logout
//     </SecondaryButton>
//   </>
// ) : (
//   <>
//     <SecondaryButton link="/login">Login</SecondaryButton>
//     <SecondaryButton link="/register">Register</SecondaryButton>
//   </>
// )}
