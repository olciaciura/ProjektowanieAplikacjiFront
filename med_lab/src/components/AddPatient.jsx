// Widok z formularzem do dodawania pacjenta

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPatient } from "../utils";

function AddPatient() {

    const navigate = useNavigate();
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

    const handleSubmitClick =  (e) => {
        e.preventDefault()
        addPatient(data, navigate);
     };

    return (
        <div className="App-page">
            <header>
                Laboratorium medyczne
            </header>

            <div className='main_component' id="column">
                <div className='FormInput' >
                    <label for='pesel'>PESEL</label>
                    <input
                        type="text"
                        id='pesel'
                        placeholder="PESEL"
                        value={data['pesel']}
                        onChange={(e) => setPesel(e.target.value)}
                    />
                </div>
                <div className='FormInput' >
                    <label for='name'>Imię:</label>
                    <input
                        type="text"
                        id='name'
                        placeholder="Imie"
                        value={data['firstName']}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='FormInput' >
                    <label for='surname'>Nazwisko:</label>
                    <input
                        type="text"
                        id='surname'
                        placeholder="nazwisko"
                        value={data['secondName']}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className='FormInput' >
                    <label for='adress'>Adres:</label>
                    <input
                        type="text"
                        id='adress'
                        placeholder="ulica nr lokalu, kod pocztowy i miejscowość"
                        value={data['address']}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className='FormInput' >
                    <label for='birth-date'>Data urodzenia:</label>
                    <input
                        type="text"
                        id='birth-date'
                        placeholder="dd-mm-rrrr"
                        value={data['birthDate']}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
                <div className='FormInput' >
                    <label for='uwagi'>Uwagi, alergie, przyjmowane leki:</label>
                    <input
                        type="text"
                        id='uwagi'
                        placeholder="uwagi"
                        value={data['information']}
                        onChange={(e) => setInformation(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmitClick}>Dodaj pacjenta</button>
            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default AddPatient;
