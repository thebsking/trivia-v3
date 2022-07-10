import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card } from '@mui/material'
import Dropdown from "../components/Dropdown";
import AdminTopBar from '../components/AdminTopBar';
import axios from "axios";

const SearchForm = () => {

  const [listOptions, setListOptions] = useState([])
  const [results, setResults] = useState([])
  const [catValue, setCatValue] = useState('')

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

  const handleRandom = () => {
    axios.get('/api/questions')
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  }

  const handleRange = () => {
    axios.get('/api/questions/range')
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  }

  const handleCats = () => {
    axios.get('/api/questions/' + catValue)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))
  }

  return (
    <>
      <AdminTopBar />
      <div id="input-div" className="center-div">
        <Dropdown label="Category" id="cat-select" options={listOptions} onChange={e => setCatValue(e.target.value)} />
        <ButtonGroup variant="contained" orientation="vertical" >
          <Button onClick={handleCats}>Search by Category</Button>
          <Button onClick={handleRange}>Range Questions</Button>
          <Button onClick={handleRandom}>Random</Button>
        </ButtonGroup>
      </div>
      <div id="results">
        {results.map((x, i) => {
          return (
            <Card className="q-card" key={i}>
              <p>Category: {x.category}</p>
              <p>Question: {x.question}</p>
              <p>Answer: {x.answer}</p>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default SearchForm;