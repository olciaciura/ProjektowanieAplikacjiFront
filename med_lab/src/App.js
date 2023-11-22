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
  const [page, setPage] = useState('main');
  const [patientData, setPatientData] = useState('');
  const [test, setTest] = useState({
    "testName1": "44",
    "testName2": "50"
})
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main setPatientData={setPatientData}/>}/>
      <Route path='/patient' element ={<Patient setTest={setTest} patientData={patientData}/>}/>
      <Route path='/add_patient' element ={<AddPatient/>}/>
      <Route path='/all_tests' element ={<AllTests/>}/>
      <Route path='/doctor' element ={<Doctor/>}/>
      <Route path='/view_test_doctor' element ={<ViewTestDoctor/>}/>
      <Route path='/view_test_patient' element ={<ViewTestPatient testList={test}/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
