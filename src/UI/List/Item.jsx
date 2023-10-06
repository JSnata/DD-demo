import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './List.module.css';

function Item({ link, icon, title, action = () => {} }) {
  return (
    <li className={s.item}>
      {link ? (
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? s.active : undefined)}
          end
        >
          <span>
            <i className={icon} />
            {title}
          </span>
        </NavLink>
      ) : (
        <button type="button" onClick={action}>
          <span>
            <i className={icon} />
            {title}
          </span>
        </button>
      )}
    </li>
  );
}

export default Item;
