// strona wyswietlajaca wszystkie testy w liscie dla danego pacjenta z konta doktora

import { useNavigate } from "react-router-dom";
import { getTestDoctor } from "../utils";

function AllTests(props) {

    const searchParams = new URLSearchParams(props.location.search);
    const tests = searchParams.get('tests');
    const pesel = searchParams.get('pesel');

    console.log(pesel, tests)

    const tests_list = JSON.parse(tests)
    const navigate = useNavigate()

    const handleTsetClick = (e, testId)  => {
        e.preventDefault();
        getTestDoctor(testId, navigate)
    }

    const handleAddClick = (e) => {
        e.preventDefault();
        navigate(`/add_test?pesel=${pesel}`);
    }

      return (
        <div className="App-page">
            <header>
                Laboratorium medyczne
            </header>
            <div className='main_component' id='patientList'>
            {tests_list.map((test, i) => (
                <button className='patient' key={test._id} onClick={(e) => handleTsetClick(e, test._id)}>
                    <h3>Badanie {test._id.slice(-5)}</h3>
                    <div>Data: {test.date}</div>
                </button>
            ))}

            <button onClick={(e) => handleAddClick(e)}> DODAJ BADANIE</button>
            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default AllTests;
