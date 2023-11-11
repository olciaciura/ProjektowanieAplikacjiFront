// Widok z formularzem do dodawania pacjenta

import { useState } from "react";

function AddPatient(props) {

    const [data, setData] = useState({'pesel': '', 'firstName': '', 'secondName': '','adress': '', 'birthDate': '', 'information': ''})

    function setPesel(pesel) {
        setData(temp_data => ({
            ...temp_data, 'pesel': pesel
        }))
    }
    function setName(name) {
        setData(temp_data => ({
            ...temp_data, 'firstName': name
        }))
    }
    function setSurname(surname) {
        setData(temp_data => ({
            ...temp_data, 'secondName': surname
        }))
    }
    function setAddress(address) {
        setData(temp_data => ({
            ...temp_data, 'adress': address
        }))
    }
    function setBirthDate(birth_date) {
        setData(temp_data => ({
            ...temp_data, 'birthDate': birth_date
        }))
    }
    function setInformation(information){
        setData(temp_data => ({
            ...temp_data, 'information': information
        }))
    }

    const handleSubmitClick =  () => {
        addPatient(data);
     };

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
                    <input
                        type="text"
                        placeholder="Imie"
                        value={data['firstName']}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="nazwisko"
                        value={data['secondName']}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="adres"
                        value={data['address']}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="data urodzenia"
                        value={data['birthDate']}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="uwagi"
                        value={data['information']}
                        onChange={(e) => setInformation(e.target.value)}
                    />    
                    <button onClick={handleSubmitClick}>Dodaj pacjenta</button>            
                </form>
            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default AddPatient;