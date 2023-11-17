// strona po zalogowaniu sie jako doktor - widok wszystkich pacjetow

import { useNavigate, useParams } from "react-router-dom";
import { getAllPateintsTests } from "../utils";


function Doctor(props) {
    const searchParams = new URLSearchParams(props.location.search);
    const patients = searchParams.get('patients');
    const patients_list = JSON.parse(patients)
    const navigate = useNavigate()

    const handlePatientClick = (e, pesel) => {
        e.preventDefault();
        console.log('czekam na testy')
        getAllPateintsTests(pesel, navigate)
    }

      return (
        <div className="App-page">
            <header>
                Laboratorium medyczne
            </header>
            <div id='app-body'>

            {patients_list.map((patient, i) => (
                <div>
                <button key={patient.pesel} onClick={(e) => handlePatientClick(e, patient.pesel)}>
                    {patient.firstName} {patient.secondName}
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

export default Doctor;
