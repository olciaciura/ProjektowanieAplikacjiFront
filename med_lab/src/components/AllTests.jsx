// strona wyswietlajaca wszystkie testy w liscie dla danego pacjenta z konta doktora

import { useNavigate } from "react-router-dom";
import { addTest, getTest } from "../utils";

function AllTests(props) {

    const searchParams = new URLSearchParams(props.location.search);
    const tests = searchParams.get('tests');
    const pesel = searchParams.get('pesel');

    console.log(pesel, tests)

    const tests_list = JSON.parse(tests)
    const navigate = useNavigate()

    const handleTsetClick = (e, testId)  => {
        e.preventDefault();
        getTest(testId, navigate)
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
            <div id='app-body'>
            {tests_list.map((test, i) => (
                <div>
                <button key={test._id} onClick={(e) => handleTsetClick(e, test._id)}>
                    {test.date}
                </button>
                </div>
            ))}
            </div>
            <button onClick={(e) => handleAddClick(e)}> ADD TEST</button>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default AllTests;
