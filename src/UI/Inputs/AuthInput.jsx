/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Field } from 'formik';
import s from './Inputs.module.css';

function AuthInput({
  label,
  id,
  type,
  name,
  placeholder,
}) {
  return (
    <label htmlFor={id} className={s.auth_label}>
      {label}
      <Field
        className={s.auth_input}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

export default AuthInput;
