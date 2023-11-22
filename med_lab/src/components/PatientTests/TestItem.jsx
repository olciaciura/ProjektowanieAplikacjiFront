function TestItem(props){
    return(
        <div>
        <h4>{props.testName}</h4>
        {props.testValue}
        </div>
    )
}
export default TestItem;