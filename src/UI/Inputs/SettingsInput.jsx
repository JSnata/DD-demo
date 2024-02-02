import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';
import s from './Inputs.module.css';

function SettingsInput({
  label,
  id,
  type,
  name,
  placeholder,
  autoComplete,
  ...rest
}) {
  return (
    <Field
      as={TextField}
      label={label}
      variant="outlined"
      className={`${s.primary_input} ${s.settings__input}`}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      fullWidth
      helperText={
        <ErrorMessage
          name={name}
          component="div"
          className={s.error__message}
          autoComplete={autoComplete}
        />
      }
      {...rest}
    />
  );
}

export default SettingsInput;
