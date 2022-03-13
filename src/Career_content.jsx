import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

import aws from "./aws.jpg"

import azure from "./azure.jpg"
import google from "./google.jpg"
import microsoft from "./microsoft.jpg"

import shape from "./shape-2.png"

function Career_content(props){

return(

<>
<div className="about-area ptb-100" data-aos="fade-up">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-8 mt-5">
                  <div className="about-content mr-20">
                     <div className="section-title">
                        <span className="subtitle">
                           <h2>{props.careertitle1}</h2>
                        </span>
                        <div className="text-about">
                           <p>
                             {props.careerpara1}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
          <div className="b--bi-b mb-ng-50" data-aos="fade-up">
        <img className="b--bi-b__img b-lazy b-loaded icon-fix" alt="Swirl" src={shape} />
     </div>
      </div>
      <section className="call-us-area text-center choose-area pt-100 pb-70 bg-darks mtp"  data-aos="fade-up">
         <div className="container">
            <div className="row">
            <div className="call-contact">
             <div className="section-title text-center">
            <h2>{props.carrertitle2}</h2>
            <div className="deliver"></div>
          </div>
            </div>
          

         </div>
            <div className="row">
               <div className="col-sm-3 col-6 mt-5">
                  <a href="joblist.html">
                  <img src={aws} alt="consulting firm, it careers" />
               </a>
               </div>
               <div className="col-sm-3 col-6 mt-5">
                  <a href="joblist.html">
                  <img src={azure} alt="consulting firm, it careers" />
               </a>
               </div>
               <div className="col-sm-3 col-6 mt-5">
                  <a href="joblist.html">
                  <img src={google} alt="consulting firm, it careers" />
               </a>
               </div>
             <div className="col-sm-3 col-6 mt-5">
                  <a href="joblist.html">
                  <img src={microsoft} alt="consulting firm, it careers" />
               </a>
               </div>
            </div>
            <div className="row pt-100">
               <div className="col-sm-12">
              <button className="default-btn btn-bg-two border-radius-50">Explore Our Job Offers</button>
           </div>
            </div>
         </div>
         

      </section>


      <div classNam="build-area-on pt-100 pb-70 bg-light ">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8 col-md-8" data-aos="fade-right ">
                  <div className="build-content build-content-on-color">
                     <div className="section-title mt-5 mb-5">
                        <h3 className="conn">{props.carrercontact} </h3>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4" data-aos="fade-left">
                  <div className="build-btn-area">
                     <a href="contact.html" className="default-btn btn-bg-two border-radius-50">Contact Us <i classNameName='bx bx-chevron-right'></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
     


</>


);




}

export default Career_content;