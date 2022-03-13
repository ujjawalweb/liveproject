import React from "react";

import video2 from "./sm-vi.mp4";



function Middleban_home(props){

return(
<>

<section className="video-container  technology-area  mtp" data-aos="fade-up">
         <div className="overlay-main bg-secondry opacity-05"></div>
         <video src={video2} autoplay="" loop playsinline muted></video>
         <div className="callout" >
         <div className="container ">
            <div className="row justify-content-center">
               <div className="col-md-12 col-sm-12">
                  <div className="awesome-counter text-center text-white">
                     <div className="section-title text-center mt-auto">
                        <h2 className="white-text">{props.aboutbanner}</h2>
                        <div className="deliver"></div>
                        <p className="text-center text-white">{props.middlebantext}
                        </p>
                        <a href="about.html" className="default-btn btn-bg-one border-radius-5">Discover More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>
      </section>

      <div className="build-area-on pt-100 pb-70 bg-light ">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8 col-md-8" data-aos="fade-right ">
                  <div className="build-content build-content-on-color">
                     <div className="section-title mt-5 mb-5">
                        <h3 className="conn">{props.middlebantext2} </h3>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4" data-aos="fade-left">
                  <div className="build-btn-area">
                     <a href="contact.html" className="default-btn btn-bg-two border-radius-50">Take the first step! <i className='bx bx-chevron-right'></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>

</>


);

}

export default Middleban_home;





