import React from "react";

import banner from "./cloud-migration-services.jpg"
import { Link } from "react-router-dom";

function Cloud_banner(){


return (
<>
<div className="banner-blog">
<img src={banner} />

<h3 className="text-inner">Cloud Migration Services </h3>

<nav className="bread" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link class="brd" to="/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Cloud Migration Services </li>
  </ol>
</nav>



</div>


     




</>

);


}




export default Cloud_banner;