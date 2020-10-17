import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navber.css'

const Navber = () => {
    return (
<header className="header-aria">
<div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">
      <img src={logo} alt=""/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link to ="/home"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item">
       <Link to ="/portfolio"> <a class="nav-link" href="#">Our Portfolio</a></Link>
      </li>
      <li class="nav-item">
       <Link to ="/team"> <a class="nav-link" href="#">Our Team</a></Link>
      </li>
      <li class="nav-item">
        <Link to ="/contact"><a class="nav-link" href="#">Contact Us</a></Link>
      </li>
      <li class="nav-item">
        <Link to ="/login"><a class="nav-link" id="login" href="#">Login</a></Link>
      </li>
      <li class="nav-item">
       <Link to ="/deshbord"> <a class="nav-link" id="admin" href="#">Admin</a></Link>
      </li>
      
    </ul>
    
  </div>
</nav>
        </div>
</header>
    );
};

export default Navber;