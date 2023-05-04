import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    function formSubmit(e){
        if(user.length<3){
            alert("Usename Should Be More Than 3 Words")
        }
        else if (password.length<3) {
            alert("Password Length Should Be More Than 3")
        }else {
            alert("All Good")
        }
        alert("Form Submitted")
        e.preventDefault()
    }
    const userHandler = (e) => {
        let user = e.target.value
        if(user.length < 3){
            setUserErr(true)
        }else {
            setUserErr(false)
        }
        setUser(user)
        
    }
    const passwordHandler = (e) => {
        let password = e.target.value
        if(password.length < 3){
            setPasswordErr(true)
        }else {
            setPasswordErr(false)
        }
        setPassword(password)
    }
  return (
    <div>
      <h1>This Is My Login</h1>
      <form onSubmit={formSubmit}>
        <input type="text" placeholder="Enter Username" onChange={userHandler} /><br />{userErr? <span>User Not Valid</span>:""}
        <br />
        <br />
        <input type="text" placeholder="Enter Password" onChange={passwordHandler} /><br />{passwordErr? <span>Password Not Valid</span>:""}
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
