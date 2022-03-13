import React from "react";

import banner from "./blog-banner.jpg"
import { Link } from "react-router-dom";

function Blog_banner(){


return (
<>
<div className="banner-blog">
<img src={banner} />

<h3 className="text-inner">Blog</h3>

<nav className="bread" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link class="brd" to="/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Blog</li>
  </ol>
</nav>



</div>




</>

);


}




export default Blog_banner;