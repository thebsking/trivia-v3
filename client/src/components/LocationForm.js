import React, { useState } from 'react';
import Input from './Input'
import Dropdown from './Dropdown'
import { Button } from '@mui/material'
import axios from 'axios';

function LocationForm() {

  const [name, setName] = useState('');
  const [day, setDay] = useState('Monday');
  const [time, setTime] = useState('');
  const [image, setImage] =useState('');

  const submitForm = () => {
    axios.post('/api/locations', {
      "name": name.target.value,
      "weekday": day.target.value,
      "start": time.target.value,
      "image": image.target.value,
    })
    .then(window.location.reload.bind(window.location))
    .catch(err => console.log(err))
  }


  return (
    <div className='center-div'>
      <Input
        id='loc-name'
        label='Location Name'
        onChange={setName}
      />
      <Dropdown
        id='loc-day'
        label='Weekday'
        onChange={setDay}
        options={['Monday', 'Tuesday', 'Wednesday', 'Thursday']}
      />
      <Input
        id='loc-time'
        label='Start Time'
        onChange={setTime}
      />
      <Input
        id='image'
        label='Image'
        onChange={setImage}
      />
      <Button variant='contained' onClick={submitForm} color='warning'>Add</Button>
    </div>
  )

}

export default LocationForm;