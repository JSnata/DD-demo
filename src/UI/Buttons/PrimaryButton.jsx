import React from 'react';
import s from './Buttons.module.css';

function PrimaryButton({ children }) {
  return <button type="submit" className={s.primary_btn}>{children}</button>;
}

export default PrimaryButton;
