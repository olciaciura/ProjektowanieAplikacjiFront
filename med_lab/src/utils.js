export async function handleLogin (pesel, navigate) {
    console.log('test')
    try {
      const response = await fetch(`http://localhost:5000/patient/${pesel}`, {
        method: 'GET'
      });

      if (response.ok) {
        console.log('wchodze')
        const data = await response.json();
        console.log(response)
        navigate("/patient");
    } else {
        console.error('Wystąpił błąd przy pobieraniu danych.');
        console.log('err')
    }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    };
};

export async function getAllPatients (navigate) {
  console.log('test')
  try {
    const response = await fetch(`http://localhost:5000/all_patients`, {
      method: 'GET'
    });

    if (response.ok) {
      const patients = await response.json();
      console.log(patients)
      await navigate(`/doctor?patients=${JSON.stringify(patients)}`);
  } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  };
};

export async function getAllPateintsTests (pesel, navigate) {
  console.log('test')
  try {
    const response = await fetch(`http://localhost:5000/patient_test/${pesel}`, {
      method: 'GET'
    });

    if (response.ok) {
      const tests = await response.json();
      console.log(tests)
      await navigate(`/all_tests?tests=${JSON.stringify(tests)}`);
  } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  };
};

export async function addPatient (data, navigate) {
  console.log(typeof(data))
  try {
    const response = await fetch(`http://localhost:5000/patient`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"},
      body: JSON.stringify({
        'pesel': data['pesel'],
        'firstName': data['firstName'],
        'secondName': data['secondName'],
        'adress': data['adress'],
        'birthDate': data['birthDate'],
        'information': data['information']
      })
    });
    if (response.ok) {
      console.log('wchodze')
      console.log(response)
      navigate("/doctor");
    } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  };
};

export async function addTest (data, pesel, date, navigate) {
  console.log(typeof(data))
  try {
    const response = await fetch(`http://localhost:5000/test`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"},
      body: JSON.stringify({
        'pesel': pesel,
        'date': date,
        'tests': data
      })
    });
    if (response.ok) {
      console.log('wchodze')
      console.log(response)
      navigate("/doctor");
    } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  };
};
