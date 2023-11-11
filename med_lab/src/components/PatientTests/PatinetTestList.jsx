function PatientTestList(props) {
  return (
    <div>
      <h3>Lista Badań</h3>
      <ul>
        {props.TestList.map((test) => {
          return <li>{test.firstTestName}</li>;
        })}
      </ul>
    </div>
  );
}
export default PatientTestList;
