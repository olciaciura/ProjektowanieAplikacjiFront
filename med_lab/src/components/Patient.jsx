// strona po zalogowaniu sie jako pacjent - widok wszystkich jego testow w kafelkach

import React from "react";
import PatientTestList from "./PatientTests/PatinetTestList"
import { useState,useEffect } from "react";
import { getPatientTests } from "../utils";

function Patient(props){
  const [patientTests, setPatientTests] = useState([]);
  console.log(props.patientData.firstName)
  useEffect(() =>{getPatientTests(props.patientData.pesel,setPatientTests)},[])

    return (
      <div>
        <header>
            Laboratorium medyczne
        </header>
        <div className='main_component' id="column">
        <h2>Witaj, {props.patientData.firstName}</h2>
        <h3>Lista Badań</h3>
        <PatientTestList testList={patientTests} setTest={props.setTest}/>
        </div>
        <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
        </footer>
      </div>
    );
};

export default Patient;
