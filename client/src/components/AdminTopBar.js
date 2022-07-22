import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

const AdminTopBar = () => {
  return (
    <Box
      sx={{
        m: 5,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <ButtonGroup variant='text' aria-label='nav-btns'>
        <Button className='nav-btn' href='/loc-admin'>Locations</Button>
        <Button className='nav-btn' href='/search'>Questions</Button>
        <Button className='nav-btn' href='/'>Close Admin</Button>
      </ButtonGroup>
    </Box>
  )
};

export default AdminTopBar;