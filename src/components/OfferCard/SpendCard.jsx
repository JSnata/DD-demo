import React from 'react';
import s from './SpendCard.module.css';

function SpendCard({ icon, spendAmount, title }) {
  return (
    <>
      <span className={s.icon}>
        <i className={icon}></i>
      </span>
      <h6 className={s.amount}>{spendAmount}</h6>
      <p className={s.title}>{title}</p>
    </>
  );
}

export default SpendCard;
