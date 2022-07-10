import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Link } from '@mui/material';
import UserTopBar from "../components/UserTopBar";
import axios from 'axios';

function Locations() {

  const [locArray, setLocArray] = useState([]);

  useEffect(() => {
    renderLocations();
  },)

  function renderLocations() {
    return axios.get('/api/locations')
      .then(res => {
        setLocArray(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <UserTopBar />
      <div id='locs-div'>
        {locArray.map((x, i) => {
          return (
            <Card variant="outlined" sx={{ maxWidth: 500 }} className='loc-card' key={i}>
              <CardMedia
                component='img'
                alt='bar photo'
                height='200'
                image={process.env.PUBLIC_URL + x.image}
              />
              <CardContent>
                <h2>{x.weekday}</h2>
                <h3>{x.name} - {x.start}</h3>
                <Link href="#">Directions</Link>
              </CardContent>
            </Card>)
        })}
      </div>
    </>
  )
}

export default Locations;