export async function handleLogin (pesel, setPatientData, navigate) {
    console.log('test')
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
  try {
    const response = await fetch(`http://localhost:5000/patient_test/${pesel}`, {
      method: 'GET'
    });

    if (response.ok) {
      const tests = await response.json();
      console.log(tests)
      await navigate(`/all_tests?pesel=${pesel}&tests=${JSON.stringify(tests)}`);
  } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  };
};

export async function getTestDoctor (testID, navigate) {
  console.log('test')
  try {
    const response = await fetch(`http://localhost:5000/test/${testID}`, {
      method: 'GET'
    });

    if (response.ok) {
      const test = await response.json();
      console.log(test)
      await navigate(`/view_test_doctor?test=${JSON.stringify(test)}`);
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
      getAllPatients(navigate)
    } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
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
export async function addTest (data, pesel, date, navigate) {
  console.log(typeof(data))
  try {
    const response = await fetch(`http://localhost:5000/test`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"},
      body: JSON.stringify({
        "pesel": pesel,
        "date": date,
        "tests": [
          JSON.stringify({"Hematokryt": data['Hematokryt']}),
          JSON.stringify({"krwinki-czerwone": data['krwinki-czerwone']}),
          JSON.stringify({"hemoglobina": data["hemoglobina"]}),
          JSON.stringify({"krwinki-biale": data["krwinki-biale"]})
        ]
      })
    });
    if (response.ok) {
      console.log('wchodze')
      getAllPateintsTests(pesel, navigate)
    } else {
      console.error('Wystąpił błąd przy pobieraniu danych.');
  }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  };
};
