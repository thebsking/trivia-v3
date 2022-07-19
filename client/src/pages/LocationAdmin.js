import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Button } from '@mui/material';
import AdminTopBar from '../components/AdminTopBar'
import BasicModal from '../components/BasicModal';
import LocationForm from '../components/LocationForm'
import axios from 'axios';

function LocationAdmin() {

  const [locArray, setLocArray] = useState([]);

  useEffect(() => {
    renderLocations();
  })

  function renderLocations() {
    return axios.get('/api/locations')
      .then(res => {
        setLocArray(res.data)
      })
      .catch(err => console.log(err))
  }

  function deleteRow(id) {
    axios.delete('/api/locations/' + id)
      .then(res => console.log(res))
      .then(window.location.reload.bind(window.location))
      .catch(err => console.log(err))
  }

  const [open, setOpen] = useState(false)
  const handleModal = () => setOpen(!open)

  return (
    <>
      <AdminTopBar />
      <div id='loc-admin' className='center-div'>
        <h2>All Locations</h2>
        <Button variant='contained' onClick={handleModal}>Add Location</Button>
        <BasicModal open={open} close={handleModal} content={<LocationForm />} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Location</TableCell>
                <TableCell align='center'>Weekday</TableCell>
                <TableCell align='center'>Start Time</TableCell>
                <TableCell align='center'>Image</TableCell>
                <TableCell align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locArray.map((row) => {
                return (
                  <TableRow key={row.name}>
                    <TableCell align='center'>{row.name}</TableCell>
                    <TableCell align='center'>{row.weekday}</TableCell>
                    <TableCell align='center'>{row.start}</TableCell>
                    <TableCell align='center'>{row.image}</TableCell>
                    <TableCell align='center'>{
                      <Button variant='contained' color='error' onClick={() => { deleteRow(row._id) }}>X</Button>}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default LocationAdmin;