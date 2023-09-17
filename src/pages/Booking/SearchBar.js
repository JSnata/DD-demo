/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { TextField } from '@mui/material';
import s from './SearchBar.module.css';

export default function SearchBar({ changeSearchInput, searchInput }) {
  const handleChange = (inputValue) => {
    changeSearchInput(inputValue);
  };

  return (
    <div className={s.searchbar}>
        <TextField
            color="primary"
            fullWidth
            placeholder="Search..."
            type="search"
            variant="standard"
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}
        />
    </div>
  );
}