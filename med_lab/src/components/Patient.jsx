import React from "react";

function Patient(props){
    const response = props.patientData
  
    return (
      <div>
        <header>
            Laboratorium medyczne 
        </header>
        <h2>Strona pacjenta</h2>
        <div>Odpowiedź z zapytania: {response}</div>
        <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
        </footer>
      </div>
    );
};

export default Patient;