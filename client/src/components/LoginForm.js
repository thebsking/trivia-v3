import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Input from './Input';
import { Button, Alert, Collapse } from '@mui/material';

export default function LoginForm(){

  const [pass, setPass] = useState('')
  const [code, setCode] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    getPasscode();
  })

  const checkPass = () => {
    return pass === code ?
    window.location.replace('/loc-admin') :
    setOpen(true)
  }

  const getPasscode = () => {
    axios.get('/api/code')
    .then(res => setCode(res.data[0].code))
    .catch(err => console.log(err))
  }

  return (
    <div id='login-form' className='center-div'>
      <Input id='pass-field' label='Enter Code' onChange={e => setPass(e.target.value)} type='password' />
      <Button variant='contained' onClick={checkPass}>Login</Button>
      <Collapse in={open}>
        <Alert severity='error' action={
        <Button color='inherit' onClick={()=> setOpen(false)}>X</Button>}
        >
          Incorrect Code
        </Alert>
      </Collapse>
    </div>
  )
}