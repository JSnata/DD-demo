/* eslint-disable */
import React from 'react';
import s from './Buttons.module.css';

function PrimaryButton({ children, type }) {
  return <button type={type || 'submit'} className={s.primary_btn}>{children}</button>;
}

export default PrimaryButton;
