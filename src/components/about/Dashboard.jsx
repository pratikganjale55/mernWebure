import React from 'react' ;
import "./dashboard.css" ;

import { useContext } from 'react';
import { AuthContextProvide } from '../AuthCotext/Authcontext';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState([])
 


 const getData = async() => {

  const id = JSON.parse(localStorage.getItem("devId")) ;
  console.log(id)
          await axios.get(`http://localhost:5000/about/${id}`) 
          .then((res) =>  setUserData(res.data))
          .catch((e) => console.log(e))
 }


   
  useEffect(() => {

       getData() ;
        
  },[]) ;
  console.log(userData)
  
  return (
    <>
  <div class="card text-center m-auto mt-5 about_container">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="true" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>
        
      </ul>
    </div>
    <div class="card-body about_body">
          <div class="card left_card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{userData.name}</h5>
                <p class="card-text">{userData.work}</p>
                <p class="card-text"><small class="text-muted">User ID : {userData._id}</small></p>
              </div>
        </div>
        <div className='right_card'>
            <p class="card-title">Phone No. : {userData.phone}</p>
            <p class="card-text">Email : {userData.email}</p>
            
        </div>
        
    </div>
</div>
    </>
  )
}

export default Dashboard ;
