import React from 'react';
import s from './Sidebar.module.css';
import MainNav from '../MainNav/MainNav';

function Sidebar() {
  return (
    <section className={s.sidebar}>
      <MainNav />
    </section>
  );
}

export default Sidebar;
