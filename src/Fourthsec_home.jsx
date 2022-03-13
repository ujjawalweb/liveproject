import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import { propTypes } from "react-bootstrap/esm/Image";

function Fourthsec_home(props){

return (
<>
<section>
 <div className="container">
  <div className="row">
      <div className="col-md-12 section-title mtp text-center">
 <h2>{props.title4}</h2>

      </div>

      <div className="col-md-12 mt-5">
      <OwlCarousel items={5}  classNameName='owl-theme' loop margin={10} nav>
    <div className='item'>
        <img src={img2}  className="icons"/>
    </div>
    <div className='item'>
    <img src={img3} className="icons"/>
    </div>
    <div className='item'>
    <img src={img4} className="icons" />
    </div>
    <div className='item'>
    <img src={img1}  className="icons"/>
    </div>
    <div className='item'>
    <img src={img2}  className="icons"/>
    </div>
 
</OwlCarousel>;
      </div>
      
      </div>   
     
     </div>   
</section>




</>


);




}

export default Fourthsec_home;