import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './List.module.css';

function Item({ link, icon, display }) {
  return (
    <li className={s.item}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? s.active : undefined)}
        end
      >
        <span>
          <i className={icon}></i>
          {display}
        </span>
      </NavLink>
    </li>
  );
}

export default Item;
