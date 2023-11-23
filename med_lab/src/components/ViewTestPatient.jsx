// widok wynikow badania jako pacjent - rozroznienie jest dla latwiejzej obslugi cofania sie do poprzedniej strony

import TestItem from "./PatientTests/TestItem";

function ViewTestPatient(props) {
  var keys = Object.keys(props.testList);
  console.log(props.testList)
  console.log(keys)
  return (
    <div className="App-page">
      <header>Laboratorium medyczne</header>
      <div className="main_component" id="column">
          {keys.map((testName) => {
            return (
                <TestItem testName={testName} testValue={props.testList[testName]}/>
            );
          })}
      </div>
      <footer>
        © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}

export default ViewTestPatient;
