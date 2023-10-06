import React from 'react';
import s from './Sidebar.module.css';
import MainNav from '../MainNav/MainNav';
import useAppContext from '../../custom-hooks/useAppContext';
import AccountList from './accountList';
import useAuthContext from '../../custom-hooks/useAuthContext';
import Logo from '../Logo/Logo';

function Sidebar() {
  const { user } = useAuthContext();
  const { isMenuOpen: menuOpen } = useAppContext();

  if (!menuOpen) {
    return null;
  }

  return (
    <section className={s.sidebar}>
      <div className={s.top}>
        <Logo />
      </div>
      <MainNav />
      {user && (
        <div className={s.footer}>
          <AccountList />
        </div>
      )}
    </section>
  );
}

export default Sidebar;
