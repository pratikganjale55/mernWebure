import axios from 'axios';
import React from 'react' ;
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authcontext, { AuthContextProvide } from '../AuthCotext/Authcontext';
import "../Register/register.css" ;



const Login = () => {

    const [login, setLogin] = useState({}) ;
    const navigate = useNavigate() ;

    const {loginSuccess } = useContext(AuthContextProvide) ;

    const handleChange = (e) => {

        const {name, value} = e.target ;
        setLogin({
            ...login,
            [name] : value
        })
    }
  const handleClick = async(e) => {
    e.preventDefault() ;
    let payload = JSON.stringify(login) ;
   
    await fetch("http://localhost:5000/login", {
      headers : {
        "Content-Type" : "application/json"
      },
      method : "POST" ,
      body : payload
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res) ;
      if(res.massage == "wrong Credientals"){
        window.alert("wrong Credientals")
    }else {
      window.alert(`login successful , token: ${res.token}`) ;
      
      localStorage.setItem("token", JSON.stringify(res.token))
      localStorage.setItem("devId", JSON.stringify(res.id))
    let check =   loginSuccess()
      if(check){
        navigate("/")
      }else {
          window.alert("wrong credentials")
      }
      
    }
    })
    .catch((e) => console.log(e))
  }
  return (
    <>
        <main class="form-signin  m-auto mt-5 register">
        <form>
            
            <h1 class="h3 mb-3 fw-normal stroke_text registerText"> LOGIN</h1>

            
            <div className="form-floating mt-2">
            <input type="email" className="form-control registerInput" id="floatingPassword" name="email" onChange={handleChange} placeholder="Enter email address"/>
            <label for="floatingPassword">Email Address</label>
            </div>
            
            <div className="form-floating mt-2">
            <input type="password" className="form-control registerInput" id="floatingPassword" name="password" onChange={handleChange} placeholder="Enter password"/>
            <label for="floatingPassword"> Password</label>
            </div>
            
            <button className="w-100 btn btn-lg regsiterButton mt-2 " type="submit" onClick={handleClick}>LOGIN</button>
            
        </form>
</main>

    </>
  )
}

export default Login
