import TestTile from "./TestTile";

function PatientTestList(props) {

  return (
    <div className="PatientTestList">
        {props.testList.map((test) => {
          var keys = Object.keys(test.tests);
          return <button className="TestTile" key={test._id}><TestTile test_id={test._id} setTest={props.setTest} firstTestName={keys[0]} date={test.date} /></button>;
        })}
    </div>
  );
}
export default PatientTestList;
