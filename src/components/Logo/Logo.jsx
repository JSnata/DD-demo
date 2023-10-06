import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Logo.module.css';
import applicationDefaults from '../../assets/dummy-data/defaults';

function Logo() {
  return (
    <NavLink to="/">
      <h2 className={s.title}>
        <span className={s.icon__wrap}>
          <i className={`${s.icon} ri-roadster-fill`} />
        </span>
        {applicationDefaults.websiteTitle}
      </h2>
    </NavLink>
  );
}

export default Logo;
