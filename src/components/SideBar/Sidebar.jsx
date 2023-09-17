import React from 'react';
import s from './Sidebar.module.css';
import MainNav from '../MainNav/MainNav';

function Sidebar() {
  return (
    <section className={s.sidebar}>
      <div className={s.top}>
        <h2>
          <span>
            <i className="ri-roadster-fill"></i>
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
