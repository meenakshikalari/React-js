// form validation by using the functional component method

import { useState } from "react";

function Form()
{
    
        const[name,setname]=useState("");
        const[email,setemail]=useState("") ;
        const[password,setpasswod]=useState("");
        const[cpassword,setcpassword]=useState("");
         
    const SubmitForm=(event)=>{
        console.log(event)
       event.preventDefault();
           
        
        //  for this   // const HandleSubmit=(event)=>{
        //     event.preventDefault();
           
           if(name.length<6)
               {
                   alert("please enter atleast definr >6 charecters username")
               }
               else if(password !== cpassword)
                   {
                       alert("password is not matched");
                   }
                   else{
                       alert("form success..!")
                   }
                }
               

        
    
    return(
        <div>
            <h1>Form Validation</h1>
            {/* <form onSubmit={HandleSubmit}> for this*/}
            <form onSubmit={SubmitForm}>
              <label for="name">FullName:</label>
              <input type="text"  value={name} placeholder="enter ur name" onChange={(event)=> setname(event.target.value)}></input>
              <br/><br/>
              <label for="email">EmailId:</label>
              <input type="email" value={email} placeholder="enter ur email" onChange={(event)=>setemail(event.target.value)}></input>
              <br/><br/>
              <label for="password">password:</label>
              <input type="password" value={password} placeholder="enter ur password" onChange={(event)=>setpasswod(event.target.value)}></input>
              <br/><br/>
              <label for="confirmpassword">password:</label>
              <input type="password" value={cpassword} placeholder="enter ur cpassword" onChange={(event)=>setcpassword(event.target.value)}></input>
              <br/><br/>
              <input type="submit" value="Submit" ></input>
              </form>
        </div>
    )
}
export default Form;
