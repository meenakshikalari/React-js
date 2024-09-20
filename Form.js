import Button from './components/Button.js';
import './Button.css'

export function App2(){

    const functionone = ()=>
        {
        alert("your form data save");
    }

    const functiontwo = ()=>
        {
         alert("your table is deleted");
    }
     
    const functionthree = ()=>
        {
            alert("you are in home page")
        }

return (
    <div>
        <h1 style = {{backgroundColor:'red',  textAlign:'center'}} >Reactjs</h1>
        <Button label="form "  functionName= {functionone}  mystyle={{backgroundColor:'blue' ,textAlign:"center"}}  />
        <Button label="table"  functionName= {functiontwo} mystylestyle={{backgroundColor:'red' ,textAlign:"center"}} />
        <Button label="home"    functionName= {functionthree} mystyle={{backgroundColor:'yellow' ,textAlign:"center" }} />    
    </div>
);
}