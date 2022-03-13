import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Link } from "react-router-dom";
import logo from "./logo.png";

function Menu(){
return (
<>



<nav class="navbar navbar-expand-lg navbar-light bg-color">
  <div class="container-fluid maxx">
   
    <Link class="navbar-brand" to="/"><img src={logo} width="190" /> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Solutions
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/cloud">Cloud Migration Services </Link></li>
            <li><Link class="dropdown-item" to="/data">Data And Analytics</Link></li>
         
            <li><Link class="dropdown-item" to="/agile">Agile Project Delivery</Link></li>
            
            <li><Link class="dropdown-item" href="#">Staffing Solution</Link></li>

        
          </ul>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/career">Career</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
        </li>
     
      </ul>
    </div>
    </div>
  
</nav>

   </>
);



}

export default Menu;

