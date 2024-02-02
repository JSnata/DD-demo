import React from 'react';
import s from './Auth.module.css';

function Header({ isLoginPage }) {
  const descriptionHtml = isLoginPage ? (
    <p>
      Don&apos;t have an account?&nbsp;
      <a href="/register">Sign up</a>
    </p>
  ) : (
    <p>
      Already have an account?&nbsp;
      <a href="/login">Login</a>
    </p>
  );

  return (
    <>
      <div className={s.description}>
        <h1>Get&apos;s started</h1>
        {descriptionHtml}
      </div>
      <div className={s.divider}>or</div>
    </>
  );
}

export default Header;
