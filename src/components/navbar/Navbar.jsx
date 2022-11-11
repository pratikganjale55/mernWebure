import React from 'react' ;

import "./navbar.css" ;
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar">
  <div className="container-fluid">
    <img src="https://cdn.dribbble.com/users/173981/screenshots/16561943/media/907e4f36ad7425f4b1115b95c75e9e76.jpg?compress=1&resize=400x300&vertical=top" alt="" style={{height: "4rem", width: "5rem"}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbarContains " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
        
          <Link  className="nav-link active" aria-current="page" to="/" style={{color : "white"}}>Dashboard</Link>
        </li>
       
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
