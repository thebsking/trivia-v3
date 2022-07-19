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
        <Button className='nav-btn' href='/search'>Search Database</Button>
        <Button className='nav-btn' href='/add'>Add to Database</Button>
      </ButtonGroup>
    </Box>
  )
};

export default AdminTopBar;