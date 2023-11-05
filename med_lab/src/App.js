import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import Patient from './components/Patient';

function App() {
  const [page, setPage] = useState('main');
  const [patientData, setPatientData] = useState('');
  return (
    <div>
      {page === 'main' && <Main page={page} setPage={setPage} setPatientData={setPatientData}/>}
      {page === 'patient' && <Patient patientData={patientData}/>}
    </div>
    
  )
}

export default App;
