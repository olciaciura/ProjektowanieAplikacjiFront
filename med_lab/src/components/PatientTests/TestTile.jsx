function TestTile(props) {
  return (
    <div style ={{ background: '#74992e'}} >
      <h3>Badanie {props.firstTestName}</h3>
      <div>Data: {props.date}</div>
    </div>
  );
}
export default TestTile;
