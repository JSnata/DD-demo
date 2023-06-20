import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './List.module.css';

function Item({ children, link }) {
  return (
    <li className={s.item}>
      <NavLink to={link} className={({ isActive }) => (isActive ? s.active : undefined)} end>
        {children}
      </NavLink>
    </li>
  );
}

export default Item;
