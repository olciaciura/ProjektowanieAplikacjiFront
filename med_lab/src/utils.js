export async function handleLogin (pesel, setPatientData, navigate) {  
    console.log('test')
    try {
      const response = await fetch(`http://localhost:5000/patient/${pesel}`, {
        method: 'GET'
      });

      if (response.ok) {
        console.log('wchodze')
        const data = await response.json();
        console.log(response)
        setPatientData(data);
        navigate("/patient");
    } else {
        console.error('Wystąpił błąd przy pobieraniu danych.');
        navigate('patient');
        console.log('err')
    }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
      navigate('patient');
    };
};