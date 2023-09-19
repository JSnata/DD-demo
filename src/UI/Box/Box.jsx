/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import styles from './Box.module.css';

function BoxElement({ children, sx = {} }) {
  return (
    <Box
      className={styles.box}
      sx={sx}
    >
      {children}
    </Box>
  );
}

export default BoxElement;
