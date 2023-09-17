import React from 'react';
import s from './Auth.module.css';

function Header() {
  return (
    <div className={s.description}>
      <h1>Get&apos;s started</h1>
      <p>
        Don&apos;t have an account?
        <a href="/register"> Sign up</a>
      </p>
      <span>or</span>
    </div>
  );
}

export default Header;
