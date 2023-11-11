// glowna strona - wybor logowanie jako pacjent i jako doktor

import { React, useState } from "react";
import './css/main.css';
import { handleLogin, handleLoginDoc } from "../utils";

function Main(props) {
    
    const [pesel, setPesel] = useState('');
    
    const handleLoginClick =  (e) => {
        e.preventDefault();
         handleLogin(pesel, props.setPatientData, props.setPage);
      };

    // const handleLoginDocClick = () => {
    //     handleLoginDoc(navigate);
    // }
    return(
        <div>
        <header>
            Laboratorium medyczne 
        </header>
        <div className="main_component">
            <div className="login" id="patient"> 
                Zaloguj sie jako pacjent
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
                Zaloguj sie jako doctor
                <form>
                    {/* <button onClick={handleLoginDocClick}>Zaloguj</button> */}
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