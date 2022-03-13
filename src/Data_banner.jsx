import React from "react";
import { Link } from "react-router-dom";

import banner from "./data-analytics.jpg"

function Data_banner(){

return (
<>

<div className="banner-blog">
<img src={banner} />

<h3 className="text-inner">
                           Data & Analytics
                            </h3>

<nav className="bread" aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link class="brd" to="/">Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">
                           Data & Analytics
                           </li>
  </ol>
</nav>



</div>

</>


);



}

export default Data_banner;