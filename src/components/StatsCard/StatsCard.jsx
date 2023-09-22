import React from 'react';
import s from './StatsCard.module.css';

function StatsCard({ children }) {
  return (
    <div className={s.wrapper}>
      <div className={s.stats}>
        <h3 className={s.stats__title}>Car Statistics</h3>
        {children}
      </div>
    </div>
  );
}

export default StatsCard;
