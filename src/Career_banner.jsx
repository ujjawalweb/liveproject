import React from "react";

import banner from "./career-banner.jpg"
import { Link } from "react-router-dom";

function Career_banner(){


return (
<>
<div className="banner-blog">
<img src={banner} />

<h3 className="text-inner">Career</h3>

<nav className="bread" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link class="brd" to="/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Career</li>
  </ol>
</nav>



</div>




</>

);


}




export default Career_banner;