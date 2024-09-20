import React from "react";
//import './Button.css';

function Button(props){
    
// const clickFunction =()=>{
//     alert("we clicked on button")
// }onClick={clickFunction}
    return(
        <button style = {props.mystyle} onClick={props.functionName} > {props.label} </button>
    )

}
export default Button;