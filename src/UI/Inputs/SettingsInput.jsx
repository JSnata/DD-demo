import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Field, ErrorMessage } from 'formik';
import s from './Inputs.module.css';

function SettingsInput({
  label, id, type, name, placeholder, autoComplete,
}) {
  return (
    <div>
      <label htmlFor={id} className={s.settings__label}>
        {label}
        <Field
          className={`${s.primary_input} ${s.settings__input}`}
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </label>
      <ErrorMessage
        name={name}
        component="div"
        className={s.error__message}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default SettingsInput;
