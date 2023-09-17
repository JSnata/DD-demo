import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MenuItem, Typography, MenuList } from '@mui/material';
import s from './ProductFilter.module.css';

const filterlist = ['All', 'Toyota', 'Volvo', 'Audi'];

export default function ProductFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <MenuList dense sx={{ display: 'flex', padding: 0 }}>
      {filterlist.map((f) => (
        <MenuItem
          selected={f === currentFilter ? true : false}
          key={f}
          onClick={() => handleClick(f)}
        >
          <Typography>{f}</Typography>
        </MenuItem>
      ))}
    </MenuList>
  );
}
