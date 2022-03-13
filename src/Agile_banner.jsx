import React from "react";
import { Link } from "react-router-dom";

import banner from "./agile-project-delivery.jpg"

function Agile_banner(){

return (
<>

<div className="banner-blog">
<img src={banner} />

<h3 className="text-inner">
Agile Project Delivery
                            </h3>

<nav className="bread" aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link class="brd" to="/">Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">
    Agile Project Delivery
                           </li>
  </ol>
</nav>



</div>

</>


);



}

export default Agile_banner;