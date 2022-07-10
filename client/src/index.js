import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import AddForm from './pages/AddForm';
import SearchForm from './pages/SearchForm'
import Home from './pages/Home';
import Locations from './pages/Locations';
import Admin from './pages/Admin';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add' element={<AddForm />} />
        <Route path='search' element={<SearchForm />} />
        <Route path='locations' element={<Locations />} />
        <Route path='admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
