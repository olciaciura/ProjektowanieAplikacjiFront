// strona po zalogowaniu sie jako pacjent - widok wszystkich jego testow w kafelkach

import React from "react";
import PatientTestList from "./PatientTests/PatinetTestList"

function Patient(props){
    const response = props.patientData
    const DUMMY_DATA = [
      {
        firstTestName: 'Hemoglobina',
        date: '5.12.2013'
      },
      {
        firstTestName: 'Holesterol',
        date: '8.12.2013'
      },
      {
        firstTestName: 'Testosteron',
        date: '10.12.2023'
      },
    ]
  
    return (
      <div>
        <header>
            Laboratorium medyczne 
        </header>
        <h2>Strona pacjenta</h2>
        <PatientTestList TestList={DUMMY_DATA}/>
        <div>Odpowiedź z zapytania: {response}</div>
        <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
        </footer>
      </div>
    );
};

export default Patient;