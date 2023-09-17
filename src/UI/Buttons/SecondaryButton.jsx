/* eslint-disable */
import React from 'react';
import s from './Buttons.module.css';
import { NavLink } from 'react-router-dom';

function SecondaryButton({ children, link, clickHandler }) {
  return (
    <li className={s.secondary_btn}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? s.active : undefined)}
        onClick={clickHandler}
        end
      >
        {children}
      </NavLink>
    </li>
  );
}

export default SecondaryButton;
