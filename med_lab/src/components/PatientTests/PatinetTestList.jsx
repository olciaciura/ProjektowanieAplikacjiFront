import TestTile from "./TestTile";



function PatientTestList(props) {
  return (
    <div >
      <h3>Lista Badań</h3>
      <ul>
        {props.TestList.map((test) => {
          var keys = Object.keys(test.tests);
          return <li key={test._id}><TestTile firstTestName={keys[0]} date={test.date} /></li>;
        })}
      </ul>
    </div>
  );
}
export default PatientTestList;
