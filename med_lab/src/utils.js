export async function handleLogin (pesel, setPatientData, setPage) {  
    console.log('test')
    try {
      const response = await fetch(`http://192.168.0.24:5000/patient/${pesel}`, {
        method: 'GET'
      });

      if (response.ok) {
        console.log('wchodze')
        const data = await response.json();
        console.log(response)
        setPatientData(data);
        setPage('patient');
    } else {
        console.error('Wystąpił błąd przy pobieraniu danych.');
        setPage('patient');
        console.log('err')
    }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
      setPage('patient');
    };
};

export async function addPatient (data) {  
  console.log('test')
  try {
    const response = await fetch(`http://localhost:5000/patient`, {
      method: 'POST',
      body: JSON.parse(data)
    });

    if (response.ok) {
      console.log('wchodze')
      const data = await response.json();
      console.log(response)
      setPatientData(data);
      setPage('patient');
  } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
      setPage('patient');
      console.log('err')
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
    setPage('patient');
  };
};