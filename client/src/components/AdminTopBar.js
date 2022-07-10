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
        <Button className='nav-btn' href='/'>Home</Button>
        <Button className='nav-btn' href='/search'>Search Database</Button>
        <Button className='nav-btn' href='/add'>Add to Database</Button>
        <Button disabled className='nav-btn' href='/new'>Create New Game</Button>
      </ButtonGroup>
    </Box>
  )
};

export default AdminTopBar;