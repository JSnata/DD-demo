/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Formik, Form } from 'formik';
import AuthInput from '../../UI/Inputs/AuthInput';
import PrimaryButton from '../../UI/Buttons/PrimaryButton';
import s from './Auth.module.css';

function SignupForm() {
  return (
    <div className={s.container}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        //   onSubmit={async (values) => {
        //     await new Promise((r) => setTimeout(r, 500));
        //     alert(JSON.stringify(values, null, 2));
        //   }}
      >
        <Form>
          <div className={s.box}>
            <AuthInput name="firstName" type="text" label="First Name" />
            <AuthInput name="lastName" type="text" label="Last Name" />
            <AuthInput
              name="email"
              placeholder="name@gmail.com"
              type="email"
              label="Email"
            />
            <AuthInput name="password" type="password" label="Password" />
          </div>
          <PrimaryButton>Sign in</PrimaryButton>
        </Form>
      </Formik>
    </div>
  );
}

export default SignupForm;
