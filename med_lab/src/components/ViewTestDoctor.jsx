// widok wynikow badania jako doctor - rozroznienie jest dla latwiejzej obslugi cofania sie do poprzedniej strony

import { useNavigate } from "react-router-dom";

function ViewTestDoctor(props) {

    const navigate = useNavigate()
    const searchParams = new URLSearchParams(props.location.search);
    const test = searchParams.get('test');
    const test_dict = JSON.parse(test)['tests']


      return (
        <div className="App-page">
            <header>
                Laboratorium medyczne
            </header>
            <div id='app-body'>
            {test_dict.map((param, i) => (
                <p key={i}>
                    {Object.keys(JSON.parse(param))}: {Object.values(JSON.parse(param))}
                </p>
            ))}
            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default ViewTestDoctor;
