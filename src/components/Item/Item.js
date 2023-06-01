import React from 'react';
import s from './Item.module.css';

function Item({children}) {
  return (
    <li>
        {children}
    </li>
  )
}

export default Item;