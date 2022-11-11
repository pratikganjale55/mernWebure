import React from 'react'
import { useState } from 'react';
import "./register.css" ;
import axios from "axios" ;
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [text, setText] = useState({}) ;
  const navigate = useNavigate()

  const handleChange = (e) => {
        const {name, value} = e.target ;
        setText({
           ...text ,
           [name] : value
        })
  }

  const handleSubmit = async(e) => {
           e.preventDefault() ;
           let payload = JSON.stringify(text) ;
          
           

         await fetch("https://appendserver1.herokuapp.com/register", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST" ,
            body : payload
          })
          .then((res) => res.json())
          .then((data) => {
                  if(data.massage == "Resister successful") {
                      alert("Register Successful") ;
                     navigate("/login")
                  }else {
                        alert("fill data")
                  }
          } )
          .catch((e) => console.log(e))
           
  }
  
  return (
    <>
    <main className="form-signin  m-auto mt-5 register">
        <form>
            
            <h1 className="h3 mb-3 fw-normal stroke_text registerText"> REGISTER</h1>

            <div className="form-floating mt-3">
            <input type="text" className="form-control registerInput" id="floatingInput" name="name" onChange={handleChange} placeholder="Enter name"/>
            <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mt-2">
            <input type="email" className="form-control registerInput" id="floatingPassword" name="email" onChange={handleChange} placeholder="Enter email address"/>
            <label for="floatingPassword">Email Address</label>
            </div>
            <div className="form-floating mt-2">
            <input type="text" className="form-control registerInput" id="floatingPassword" name="phone" onChange={handleChange} placeholder="Enter phone number"/>
            <label for="floatingPassword"> Phone Number</label>
            </div>
            <div className="form-floating mt-2">
            <input type="text" className="form-control registerInput" id="floatingPassword" name="work" onChange={handleChange} placeholder="Work"/>
            <label for="floatingPassword"> Work</label>
            </div>
            <div className="form-floating mt-2">
            <input type="password" className="form-control registerInput" id="floatingPassword" name="password" onChange={handleChange} placeholder="Enter password"/>
            <label for="floatingPassword"> Password</label>
            </div>
            <div className="form-floating mt-2">
            <input type="password" className="form-control registerInput" id="floatingPassword" name="cpassword" onChange={handleChange} placeholder="Re-Enter password"/>
            <label for="floatingPassword">Confirmed Password</label>
            </div>

            
            <button className="w-100 btn btn-lg  regsiterButton mt-2 " type="submit" onClick={handleSubmit}>REGISTER</button>
            
        </form>
</main>

    </>
  )
}

export default Register
