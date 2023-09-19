import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import s from './Filter.module.css';

function Filter({ options }) {
  return (
    <FormControl size="small">
      <Select defaultValue={options[0]} className={s.filter}>
        {options.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Filter;
