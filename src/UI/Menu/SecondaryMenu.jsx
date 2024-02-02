import React from 'react';
import { Link } from 'react-router-dom';
import s from './Menu.module.css';

function SecondaryMenu({ menuData, clickHandler }) {
  return (
    <ul className={s.list}>
      {menuData.map((item) => (
        <li key={item.link} className={s.item}>
          {item.link ? (
            <Link to={item.link}>{item.title}</Link>
          ) : (
            <button type="button" onClick={clickHandler}>
              {item.title}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SecondaryMenu;
