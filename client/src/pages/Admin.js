import React, {useState} from 'react';
import Input from '../components/Input';
import UserTopBar from '../components/UserTopBar';
import { Button } from '@mui/material'

function Admin() {

  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');

  function submitCred() {
    console.log(user, pass)
  }

  return (
    <>
      <UserTopBar />
      <div id='login-form' className='center-div'>
        <Input label='username' id='user-name' onChange={e => setUser(e.target.value)}/>
        <Input label='password' id='pass-word' type='password' onChange={e => setPass(e.target.value)}/>
        <Button variant='contained' onClick={submitCred} >Login</Button>
      </div>
    </>
  )

}

export default Admin;