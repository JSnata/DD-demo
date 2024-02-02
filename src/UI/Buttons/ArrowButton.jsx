import React from 'react';
import s from './Buttons.module.css';

function ArrowButton() {
  return (
    <button type="button" className={s.arrow_button}>
      <i className="ri-arrow-right-line"></i>
    </button>
  );
}

export default ArrowButton;
