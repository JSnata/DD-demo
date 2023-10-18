import React from 'react';

import classes from './Profile.module.css';

function Item({ title, value }) {
  return (
    <li className={classes.item}>
      <span className={classes.item_title}>{title}</span>
      <span className={classes.item_value}>{value}</span>
    </li>
  );
}

export default Item;
