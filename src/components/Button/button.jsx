'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BasicButtons = ({ onClick }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={onClick}>Outlined</Button>
    </Stack>
  );
}

export default BasicButtons;