import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

const UserTopBar = () => {
  return (
    <Box
      sx={{
        m: 5,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <ButtonGroup variant='text' aria-label='nav-btns'>
        <Button className='nav-btn' href='/'>Home</Button>
        <Button className='nav-btn' href='/locations'>Find a Game</Button>
        <Button className='nav-btn' href='/search'>Admin</Button>
      </ButtonGroup>
    </Box>
  )
};

export default UserTopBar;