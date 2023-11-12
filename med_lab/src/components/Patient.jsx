// strona po zalogowaniu sie jako pacjent - widok wszystkich jego testow w kafelkach

import React from "react";
import PatientTestList from "./PatientTests/PatinetTestList"
import { useState,useEffect } from "react";
import { getPatientTests } from "../utils";

function Patient(props){
  const [patientTests, setPatientTests] = useState([]);
  console.log(props.patientData.pesel)
  useEffect(() =>{getPatientTests(props.patientData.pesel,setPatientTests)},[])
  //getPatientTests(props.patientData.pesel,setPatientTests)
    const DUMMY_DATA = [
      {
        _id: '1',
        firstTestName: 'Hemoglobina',
        date: '5.12.2013',
        tests: {
            "Hemoglobina": "55",
            "Testosteron": "10"
        }
      },
      {
        _id: '2',
        firstTestName: 'Holesterol',
        date: '8.12.2013',
        tests: {
            "BiałeKrwiniik": "55",
            "Testosteron": "10"
        }
      },
      {
        _id: '3',
        firstTestName: 'BiałeKrwiniik',
        date: '10.12.2023',
        tests: {
          "BiałeKrwinki": "55",
          "Testosteron": "10"
      }
      },
    ]
    return (
      <div>
        <header>
            Laboratorium medyczne 
        </header>
        <h2>Strona pacjenta</h2>
        <PatientTestList testList={patientTests}/>
        <div>Odpowiedź z zapytania: {props.patientData.firstName}</div>
        <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
        </footer>
      </div>
    );
};

export default Patient;