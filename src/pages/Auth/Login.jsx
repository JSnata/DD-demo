/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import useLogin from '../../custom-hooks/useLogin';
import AuthInput from '../../UI/Inputs/AuthInput';
import PrimaryButton from '../../UI/Buttons/PrimaryButton';
import Header from './Header';
import s from './Auth.module.css';
import BoxElement from '../../UI/Box/Box';

function Login() {
  const { login } = useLogin();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const handleLogin = async (formValue) => {
    const { email, password } = formValue;
    login(email, password);
  };

  return (
    <div className={s.container}>
      <section className={s.content}>
        <Header isLoginPage />
        <div className={s.form_container}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleLogin(values);
            }}
          >
            <Form>
              <BoxElement>
                <AuthInput id="email" label="Email" name="email" type="email" />
                <AuthInput
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="on"
                />
                <PrimaryButton type="submit">Login</PrimaryButton>
              </BoxElement>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  );
}

export default Login;
