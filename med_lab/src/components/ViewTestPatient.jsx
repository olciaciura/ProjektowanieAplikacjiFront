// widok wynikow badania jako pacjent - rozroznienie jest dla latwiejzej obslugi cofania sie do poprzedniej strony

import TestItem from "./PatientTests/TestItem";

function ViewTestPatient(props) {
      return (
        <div className="App-page">
            <header>
                Laboratorium medyczne 
            </header>
            <div id='app-body'>
            {props.testsList.map((test) => {
            var keys = Object.keys(test.tests);
            return <li key={test._id}><TestItem name={keys}/>
            </li>;
            })}
            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default ViewTestPatient;