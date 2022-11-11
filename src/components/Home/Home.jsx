import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContextProvide } from '../AuthCotext/Authcontext';
import "./home.css" ;

const Home = () => {

  const [nameData, setnameData] = useState({}) ;
  const {privacy} = useContext(AuthContextProvide) ;
  const {getData} = useContext(AuthContextProvide) ;

  const id = JSON.parse(localStorage.getItem("devId")) ;

  useEffect(() => {
       getData(id).then((res) => res.json())
       .then((data) =>{
             if(data){
              setnameData(data)
             }
       } )    
  }, [])

 return privacy? (
    <>
      <div className="homepage">
        <div className='home_container'>
          <div className="introd">
              <p className='stroke_text1' >WELCOME </p>
              <span style={{color: '#4C0033' ,fontSize:"xx-large",fontWeight: "bold", textTransform : "uppercase"}}>{nameData.name}</span>
            <div>
              <p className='text'>WE ARE <span className='stroke_text1'>MERN</span>  DEVELOPER</p> 
            </div>
          </div>
        </div>
     </div>
     <div className="dev_image">
      <img src="https://i.gifer.com/MOig.gif" alt="" className="src1" />
      <img src="https://cutewallpaper.org/24/computer-gif/pc-computer-gif-pc-computer-search-discover-amp-share-gifs.gif" alt="" className="src2" />
     </div>
    </>
  ): (
    <>
      <div className="homepage">
        <div className='home_container'>
          <div className="introd">
              <p className='stroke_text1'>WELCOME</p>
            <div>
              <p className='text'>WE ARE <span className='stroke_text1'>MERN</span>  DEVELOPER</p> 
            </div>
          </div>
        </div>
     </div>
     <div className="dev_image">
      <img src="https://i.gifer.com/MOig.gif" alt="" className="src1" />
      <img src="https://cutewallpaper.org/24/computer-gif/pc-computer-gif-pc-computer-search-discover-amp-share-gifs.gif" alt="" className="src2" />
     </div>
    </>
  )
}

export default Home
