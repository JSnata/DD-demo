import React from 'react';
import s from './Sidebar.module.css';
import MainNav from '../MainNav/MainNav';
import useAppContext from '../../custom-hooks/useAppContext';

function Sidebar() {
  const { isMenuOpen: menuOpen } = useAppContext();

  if (!menuOpen) {
    return null;
  }

  return (
    <section className={s.sidebar}>
      <div className={s.top}>
        <h2 className={s.title}>
          <span className={s.icon__wrap}>
            <i className={`${s.icon} ri-roadster-fill`} />
          </span>
          Rent
        </h2>
      </div>
      <div className={s.content}>
        <MainNav />
      </div>
    </section>
  );
}

export default Sidebar;
