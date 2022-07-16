import React from 'react';
import Input from './Input'
import Dropdown from './Dropdown'
import { Button } from '@mui/material'

function LocationForm() {

  const tbd = 'placeholder'

  return (
    <div className='center-div'>
      <Input
        id='loc-name'
        label='Location Name'
        onChange={tbd}
      />
      <Dropdown
        id='loc-day'
        label='Weekday'
        onChange={tbd}
        options={['Monday', 'Tuesday', 'Wednesday', 'Thursday']}
      />
      <Input
        id='loc-time'
        label='Start Time'
        onChange={tbd}
      />
      <Input
        disabled
        id='image'
        label='Image'
      />
      <Button onClick={tbd}>Add</Button>
    </div>
  )

}

export default LocationForm;