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
    const handleAddClick = (e) => {
        e.preventDefault()
        navigate(`/add_patient`)
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
                    {patient.firstName} {patient.secondName}, {patient.pesel}
                </button>
                </div>
            ))}
            <button onClick={(e)=>handleAddClick(e)}>ADD PATIENT</button>
            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default Doctor;
