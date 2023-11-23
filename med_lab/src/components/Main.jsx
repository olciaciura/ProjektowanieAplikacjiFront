// glowna strona - wybor logowanie jako pacjent i jako doktor

import { React, useState } from "react";
import './css/main.css';
import { handleLogin, getAllPatients } from "../utils";
import { useNavigate } from "react-router-dom";

function Main(props) {
    const navigate = useNavigate();
    const [pesel, setPesel] = useState('');

    const handleLoginClick =  (e) => {
        e.preventDefault();
         handleLogin(pesel, props.setPatientData, navigate);
      };

    const handleLoginDocClick = (e) => {
        e.preventDefault();
        getAllPatients(navigate);
    }
    return(
        <div class='app'>
        <header>
            Laboratorium medyczne
        </header>
        <div className="main_component" id='main_page'>
            <div className="login" id="patient">
                <p>Zaloguj sie jako pacjent</p>
                <form>
                    <input
                        type="text"
                        placeholder="PESEL"
                        value={pesel}
                        onChange={(e) => setPesel(e.target.value)}
                    />
                    <button onClick={handleLoginClick}>Zaloguj</button>
                </form>
            </div>
            <div className="login" id="doctor">
                <p>Zaloguj sie jako doktor</p>
                <form>
                    <button onClick={handleLoginDocClick}>Zaloguj</button>
                </form>
            </div>
        </div>
        <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
        </footer>
        </div>
    )
};

export default Main;
