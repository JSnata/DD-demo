import React from 'react';
import s from './GeneralCard.module.css';

function GeneralCard({ title, totalNumber, icon }) {
  return (
    <div className={s.card}>
      <div className={s.content}>
        <h4>{title}</h4>
        <span>{totalNumber}</span>
      </div>
      <span className={s.icon}>
        <i className={icon}></i>
      </span>
    </div>
  );
}

export default GeneralCard;
