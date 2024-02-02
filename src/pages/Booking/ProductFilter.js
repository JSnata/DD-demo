import React from 'react';
import { MenuItem, Typography, MenuList } from '@mui/material';

const filterlist = ['All', 'Toyota', 'Volvo', 'Audi'];

export default function ProductFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <MenuList dense sx={{ display: 'flex', padding: 0 }}>
      {filterlist.map((item) => (
        <MenuItem
          selected={item === currentFilter}
          key={item}
          onClick={() => handleClick(item)}
        >
          <Typography>{item}</Typography>
        </MenuItem>
      ))}
    </MenuList>
  );
}
