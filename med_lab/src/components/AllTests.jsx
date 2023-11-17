// strona wyswietlajaca wszystkie testy w liscie dla danego pacjenta z konta doktora

import { useNavigate } from "react-router-dom";
import { getTest } from "../utils";

function AllTests(props) {

    const searchParams = new URLSearchParams(props.location.search);
    const tests = searchParams.get('tests');
    const tests_list = JSON.parse(tests)
    const navigate = useNavigate()

    const handleTsetClick = (e, testId)  => {
        e.preventDefault();
        getTest(testId, navigate)
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
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default AllTests;
