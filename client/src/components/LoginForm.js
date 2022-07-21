import React, { useState } from 'react';
import axios from 'axios'
import Input from './Input';
import { Button } from '@mui/material';

export default function LoginForm(){
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = () => {
    axios.post('/api/login', {
      "user": user,
      "password": pass 
    })
    .then(window.location.replace('/loc-admin'))
    .catch(err => console.log(err))
  }

  return (
    <div id='login-form' className='center-div'>
      <Input id='user-field' label='Username' onChange={(e) => setUser(e.target.value) } />
      <Input id='pass-field' label='Password' onChange={e => setPass(e.target.value)} type='password' />
      <Button variant='contained' onClick={handleSubmit}>Login</Button>
    </div>
  )
}