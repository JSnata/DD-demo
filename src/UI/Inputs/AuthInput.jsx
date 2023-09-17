import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';
import s from './Inputs.module.css';

function AuthInput({
  label, id, type, name, placeholder, autoComplete,
}) {
  return (
    <div>
      <Field
        as={TextField}
        label={label}
        id={id}
        name={name}
        variant="outlined"
        size="small"
        fullWidth
        placeholder={placeholder}
        type={type}
        helperText={(
          <ErrorMessage
            name={name}
            component="div"
            className={s.error__message}
            autoComplete={autoComplete}
          />
        )}
      />
    </div>
  );
}

export default AuthInput;
