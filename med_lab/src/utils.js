export async function handleLogin (pesel, setPatientData, navigate) {  
    try {
      const response = await fetch(`http://localhost:5000/patient/${pesel}`, {
        method: 'GET'
      });

      if (response.ok) {
        const data = await response.json();
        setPatientData(data.patient);
        navigate("/patient");
    } else {
        console.error('Wystąpił błąd przy pobieraniu danych.');
        navigate('patient');
    }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
      navigate('patient');
    };
};
export async function getPatientTests(pesel, setPatientTests){
  console.log("working")
  try {
    const response = await fetch(`http://localhost:5000/patient_test/${pesel}`, {
      method: 'GET'
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setPatientTests(data);
  } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  };
}
export async function getTest(id_test, setTest){
  console.log("GetTest")
  try {
    const response = await fetch(`http://localhost:5000/test/${id_test}`, {
      method: 'GET'
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.tests)
      setTest(data.tests);
  } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  };
}

