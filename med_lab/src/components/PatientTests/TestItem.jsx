function TestItem(props){
    return(
        <div className="TestItem">
        <p>{Object.keys(JSON.parse(props.testValue))}: {Object.values(JSON.parse(props.testValue))}</p>
        </div>
    )
}
export default TestItem;
