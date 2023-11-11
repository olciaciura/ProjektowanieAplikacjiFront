// Widok z formularzem do dodawania pacjenta

import { useState } from "react";

function AddPatient(props) {

    const [data, setData] = useState({'pesel': '', 'imie': '', 'nazwisko': '', 'data-urodzenia': '', 'uwagi': ''})

    function setPesel(pesel) {
        // var temp_data = data
        // temp_data['pesel'] = pesel
        setData(temp_data => ({
            ...temp_data, 'pesel': pesel
        }))
    }

    return (
        <div className="App-page">
            <header>
                Laboratorium medyczne 
            </header>
            <div id='app-body'>
                <button id="return_button" onClick={e => props.setPage('main')}>Wróć do poprzedniej strony</button>
                <form>
                <input
                        type="text"
                        placeholder="PESEL"
                        value={data['pesel']}
                        onChange={(e) => setPesel(e.target.value)}
                    />
                
                </form>
            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default AddPatient;