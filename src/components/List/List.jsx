import React from 'react';
import s from './List.module.css';

function List({ children }) {
  return <ul className={s.list}>{children}</ul>;
}

export default List;
