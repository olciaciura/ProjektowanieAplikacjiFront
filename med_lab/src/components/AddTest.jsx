// strona z formularzem do dodawania badania
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTest } from '../utils'

function AddTest(props) {

    const navigate = useNavigate();
    const [date, setDate] = useState()  //wziac z kalendarza
    const [data, setData] = useState({"Hematokryt": "", "krwinki-czerwone": "", "hemoglobina": "", "krwinki-biale": ""});

    const searchParams = new URLSearchParams(props.location.search);
    const pesel = searchParams.get('pesel');
    console.log(pesel);
    const handleParamChange = (value, key) => {
        setData(current => ({
            ...current, [key]: value
        }))
    };

    const handleSubmitClick =  (e) => {
        e.preventDefault()
        addTest(data, pesel, date, navigate);
    };

    return (
        <div className="App-page">
            <header>
                Laboratorium medyczne
            </header>
            <div className='main_component' id="add_test">
            <div className='FormInput'>
            <label for='date'>Data badania:</label>
            <input
                type="date"
                id='date'
                placeholder="Data"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            </div>

            {Object.keys(data).map((key, index) => (
                <div className='FormInput' >
                    <label for={key}>{key}</label>
                    <input
                        type="text"
                        id={key}
                        placeholder={key}
                        value={data[key]}
                        onChange={(e) => handleParamChange(e.target.value, key)}
                    />
                </div>

                ))}
                    <button onClick={handleSubmitClick}>Dodaj test</button>

            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
    );
};

export default AddTest;
