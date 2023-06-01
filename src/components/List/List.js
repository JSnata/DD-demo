import React from 'react';
import s from './List.module.css';


function List({children}) {
  return (
    <ul>
        {children}
    </ul>
  )
}

export default List;