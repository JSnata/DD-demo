import React from 'react';
import s from './List.module.css';
import { NavLink } from 'react-router-dom';

function Item({children, link, end}) {
  return (
    <li className={s.item}>
      <NavLink to={link} className={({isActive}) => isActive ? s.active : undefined} end>
        {children}
      </NavLink>
    </li>
  )
}

export default Item;