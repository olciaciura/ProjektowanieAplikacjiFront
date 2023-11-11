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
  return (
    // <div>
    //   {page === 'main' && <Main page={page} setPage={setPage} setPatientData={setPatientData}/>}
    //   {page === 'patient' && <Patient patientData={patientData}/>}
    //   {page === 'add_patient' && <AddPatient/>}
    //   {page === 'add_test' && <AddTest/>}
    //   {page === 'all_tests' && <AllTests/>}
    //   {page === 'doctor' && <Doctor/>}
    //   {page === 'view_test_doctor' && <ViewTestDoctor/>}
    //   {page === 'view_test_patient' && <ViewTestPatient/>}
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main setPatientData={setPatientData}/>}/>
      <Route path='/patient' element ={<Patient patientData={patientData}/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
