import React from 'react';
// import LoginForm from '../../components/Authentication/LoginForm';
import SignupForm from '../../components/Authentication/SignupForm';
import s from './Login.module.css';

function Login() {
  return (
    <div className={s.container}>
      <section className={s.content}>
        <div className={s.description}>
          <h1>Get&apos;s started</h1>
          <p>
            Don&apos;t have an account?
            <a href="/"> Sign up</a>
          </p>
          <span>or</span>
        </div>
        <SignupForm />
      </section>
    </div>
  );
}

export default Login;
