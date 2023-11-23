// widok wynikow badania jako doctor - rozroznienie jest dla latwiejzej obslugi cofania sie do poprzedniej strony

function ViewTestDoctor(props) {

    const searchParams = new URLSearchParams(props.location.search);
    const test = searchParams.get('test');
    const test_dict = JSON.parse(test)['tests']


      return (
        <div className="App-page">
            <header>
                Laboratorium medyczne
            </header>
            <div className='main_component' id='column'>
            {test_dict.map((param, i) => (
                <div className="TestItem">
                <p key={i}>
                    {Object.keys(JSON.parse(param))}: {Object.values(JSON.parse(param))}
                </p>
                </div>
            ))}
            </div>
            <footer>
                © 2023 Aleksandra Ciura, Jakub Kulejewski. Wszelkie prawa zastrzeżone.
            </footer>
        </div>
      );
};

export default ViewTestDoctor;
