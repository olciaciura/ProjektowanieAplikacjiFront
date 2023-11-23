import { getTest } from "../../utils";
import { useNavigate } from "react-router-dom";

function TestTile(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/view_test_patient")
        getTest(props.test_id, props.setTest);
      }}
    >
      <h3>Badanie {props.test_id.slice(-5)}</h3>
      <div>Data: {props.date}</div>
    </div>
  );
}
export default TestTile;
