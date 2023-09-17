import React from 'react';
import s from './Filter.module.css';

function Filter({ options }) {
  return (
    <div className={s.filter}>
      <select>
        {options.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
