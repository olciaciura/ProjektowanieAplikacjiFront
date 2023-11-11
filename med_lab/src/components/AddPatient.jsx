// Widok z formularzem do dodawania pacjenta

function AddPatient(props) {
      return (
        <div className="App-page">
            <header>
                Laboratorium medyczne 
            </header>
            <div id='app-body'>
                <button id="return_button">Wróć do poprzedniej strony</button>
                <form>
                <input
                        type="text"
                        placeholder="PESEL"
                        value={props.pesel}
                        onChange={(e) => set(e.target.value)}
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