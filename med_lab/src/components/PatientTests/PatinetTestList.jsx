import TestTile from "./TestTile";
import { useEffect } from "react";



function PatientTestList(props) {


  return (
    <div >
      <h3>Lista Badań</h3>
      <ul>
        {props.testList.map((test) => {
          var keys = Object.keys(test.tests);
          return <li key={test._id}><TestTile test_id={test._id} setTest={props.setTest} firstTestName={keys[0]} date={test.date} /></li>;
        })}
      </ul>
    </div>
  );
}
export default PatientTestList;
