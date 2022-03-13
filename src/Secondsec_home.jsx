import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import video from "./1.mp4"
function Secondsec_home(props){

return (
<>
  <div className="about about-pilar aem-GridColumn aem-GridColumn--default--12 pt-100" id="abt"  data-aos="fade-up">
  <div className="container">
     <div className="content">
        <div className="box-bordered">
           <span className="subtitle">
              <div className="section-title text-center">
                 <h2>Make Your Digital Transformation Dream a Successful Reality.</h2>
                 <div className="deliver"></div>
              </div>
           </span>
           <div className="midia">
                      <video src={video} autoplay="" loop playsinline muted className="play-on popup-btn img-media" data-aos="fade-up-right"></video>
                     
                  </div>
        
        </div>
        </div>
  </div>
  </div>
     
   <div className="container">
<div className="row">
<div className="col-md-12">
  <p className="para-pad">
{props.paraone}
  </p>
  <p className="para-pad">{props.paratwo}</p>

<p className="para-pad">{props.parathree}</p>
</div>

</div>


   </div>


  


</>

);




}

export default Secondsec_home;