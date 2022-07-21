import React, { useState } from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';
import BasicModal from './BasicModal';
import LoginForm from './LoginForm';

const UserTopBar = () => {

  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open)

  return (
    <div id='user-top-bar'>
      <Box
        sx={{
          m: 5,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ButtonGroup variant='text' aria-label='nav-btns'>
          <Button className='nav-btn' onClick={() => window.location.replace('/')}>Home</Button>
          <Button className='nav-btn' onClick={() => window.location.replace('/locations')}>Find a Game</Button>
          <Button className='nav-btn' onClick={handleModal}>Admin</Button>
        </ButtonGroup>
      </Box>
      <BasicModal open={open} close={handleModal} content={<LoginForm />} />
    </div>
  )
};

export default UserTopBar;