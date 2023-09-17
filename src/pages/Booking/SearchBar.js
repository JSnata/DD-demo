/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Input } from '@mui/material';
import s from './SearchBar.module.css';

export default function SearchBar({ changeSearchInput, searchInput }) {
  const handleChange = (inputValue) => {
    changeSearchInput(inputValue);
  };

  return (
    <div className={s.searchbar}>
      <Input
        color="primary"
        fullWidth
        value={searchInput}
        icon="search"
        placeholder="Search..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}