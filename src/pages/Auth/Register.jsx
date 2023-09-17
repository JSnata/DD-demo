/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import useSignup from '../../custom-hooks/useSignup';
import AuthInput from '../../UI/Inputs/AuthInput';
import PrimaryButton from '../../UI/Buttons/PrimaryButton';
import Header from './Header';
import s from './Auth.module.css';

function Register() {
  const { signup } = useSignup();
  //

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        'len',
        'The username must be between 3 and 20 characters.',
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required!'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required('This field is required!'),
  });
  const handleRegister = async (formValue) => {
    const { username, email, password } = formValue;
    signup(username, email, password);
  };

  return (
    <div className={s.container}>
      <section className={s.content}>
        <Header />
        <div className={s.form_container}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form>
              <div className={s.form_box}>
                <AuthInput
                  id="username"
                  label="Username"
                  name="username"
                  type="text"
                />
                <AuthInput id="email" label="Email" name="email" type="email" />
                <AuthInput
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                />
                <PrimaryButton type="submit">Sign Up</PrimaryButton>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  );
}

export default Register;
