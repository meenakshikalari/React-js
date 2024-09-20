// form validation 
// it is in classical based 
import React from "react"
class App1 extends React.Component
{
    constructor()
    {
        super();
        
            this.state={ name: "",
                         email: "",
                         Pswd: "",
                         Cpswd: ""};

            
        }
        HandleName=(e)=>
            {
                this.setState({name: e.target.value})

        }
        HandleEmail=(e)=>
            {
                this.setState({email: e.target.value})

        }
        HandlePswd=(e)=>
            {
                this.setState({Pswd: e.target.value})

        }
        HandleCPassword=(e)=>
            {
                this.setState({Cpswd: e.target.value})

        }

        //for validation
        HandleSubmit=(event)=>{
             event.preventDefault();
            
            if(this.state.name.length<6)
                {
                    alert("please enter atleast definr >6 charecters username")
                }
                else if(this.state.Pswd !== this.state.Cpswd)
                    {
                        alert("password is not matched");
                    }
                    else{
                        alert("form success..!")
                    }
                
                }

render()
{
    return(
        <div>
            <h1>
                Form validation
            </h1>
            <form onSubmit={this.HandleSubmit}>
                <label>FullName:  </label>  
                <input type="text" value={this.state.name} onChange={this.HandleName}></input>
                    <br/><br/>
                 <label>EmailId:</label>   
                    <input type="email" value={this.state.email} onChange={this.HandleEmail}></input>
                    <br/><br/>
                    <label>Password:</label>
                   <input type="password" value={this.state.Pswd} onChange={this.HandlePswd}></input>
                   <br/><br/>
                  <label>Confirm Password:</label>
                  <input type="password" value={this.state.Cpswd} onChange={this.HandleCPassword}></input>
                  <br/>
                  <br/>
                  <input type="submit"></input>
                
                    </form>




        </div>
    )
}
}
export default App1;