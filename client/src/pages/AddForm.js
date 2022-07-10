import React, { useState, useEffect } from "react";
import { Button, Checkbox, FormControlLabel } from '@mui/material'
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import AdminTopBar from '../components/AdminTopBar'
import axios from "axios"

const AddForm = () => {

  const [cat, setCat] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [range, setRange] = useState(false)
  const [listOptions, setListOptions] = useState([])

  function handleSubmit(){
    axios.post('/api/questions/', {
      category: cat,
      question: question,
      answer: answer,
      range: range
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getCategories();
  }, [])

  function getCategories() {
    return axios.get('/api/questions/allcats')
      .then(res => {
        setListOptions(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <AdminTopBar />
      <form>
        <div className="center-div">
          <Dropdown label="Category" id="cat-select" options={listOptions} onChange={e => setCat(e.target.value)} />
          <Input id="q-input" label="Question" onChange={e => setQuestion(e.target.value)} />
          <Input id="a-input" label="Answer" onChange={e => setAnswer(e.target.value)} />
          <FormControlLabel control={<Checkbox size="large" />} label="Range?" labelPlacement="start" onChange={e => setRange(e.target.checked)}/>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </>
  )
}

export default AddForm;