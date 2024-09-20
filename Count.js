import {useState} from "react";

function  CounterComp(){
    // var count=0
    const[count,setValue]=useState(0)
    const[countNumber,setDataValue]=useState(0);
    const increaseCount=()=>{
        setDataValue(countNumber+1);
        setValue(count+1)
    //    alert(count)
    }
    const decrementcount=()=>{
        setDataValue(countNumber-1);
        setValue(count-1)
    }
    const reset=()=>{
        setDataValue(0);
        setValue(0)
    }
    
    return(
        <div>
            <h1>
                counter
            </h1>
            <button onClick={increaseCount}> inc</button>
            <button onClick={decrementcount}>dec</button>
            <button onClick={reset}>reset</button>
            <p>counter:{countNumber}</p>
            <p>test value:{count}</p>
        </div>
    )
    
}
export default CounterComp;