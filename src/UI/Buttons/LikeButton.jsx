import React from 'react';
import s from './Buttons.module.css';

function LikeButton() {
  return (
    <span className={s.like_button}>
      <i className="ri-heart-line"></i>
    </span>
  );
}

export default LikeButton;
