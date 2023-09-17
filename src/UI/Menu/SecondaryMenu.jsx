import React from 'react';
import { Link } from 'react-router-dom';
import s from './Menu.module.css';

function SecondaryMenu({ menuData, clickHandler }) {
  return (
    <ul className={s.list}>
      {menuData.map((item) => (
        <li className={s.item}>
          <Link to={item.link} onClick={clickHandler}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default SecondaryMenu;
