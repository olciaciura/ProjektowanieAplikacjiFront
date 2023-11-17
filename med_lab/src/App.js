import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import Patient from './components/Patient';
import AddPatient from './components/AddPatient';
import AddTest from './components/AddTest';
import AllTests from './components/AllTests';
import Doctor from './components/Doctor';
import ViewTestDoctor from './components/ViewTestDoctor';
import ViewTestPatient from './components/ViewTestPatient';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/patient' element ={<Patient/>}/>
      <Route path='/add_patient' element ={<AddPatient/>}/>
      <Route path='/all_tests' element ={<AllTests />}/>
      <Route path='/add_test' element={<AddTest location={window.location}/>}/>
      <Route path='/doctor' element ={<Doctor location={window.location}/>}/>
      <Route path='/view_test_doctor' element ={<ViewTestDoctor/>}/>
      <Route path='/view_test_patient' element ={<ViewTestPatient/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
