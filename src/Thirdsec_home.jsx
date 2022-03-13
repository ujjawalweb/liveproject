import React from "react";

import icon1 from "./icon-1.png"
import shape2 from "./shape-2.png"

import icon2 from "./icon-2.png"
import icon3 from "./icon-3.png"


function Thirdsec_home(props){
return (
<>

<section className="services-area-four pt-50 pb-70 expertise-sec">
           <div className="b--bi-b" data-aos="fade-up">
        <img className="b--bi-b__img  b-lazy b-loaded" alt="Swirl" src={shape2}  />
     </div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-12">
                  <div className="services">
                     <div className="section-title mtp">
                        <h2 className="mob-txt">{props.title2}</h2>  
                     </div>
                   </div>
               </div>
               <div className="col-lg-12">
                  <div className="row">
                     <div className="col-lg-4 col-sm-4" data-aos="fade-up">
                        <div className="services-card services-card-color-bg" >
                          <i className=""><img src={icon1} /></i>
                           <h3><a href="cloud-migration-services.html">{props.headone}</a></h3>
                           <a href="cloud-migration-services.html" className="learn-btn">{props.learn} <i className="bx bx-chevron-right"></i></a>
                        </div>
                     </div>
                    <div className="col-lg-4 col-sm-4">
                        <div className="services-card services-card-color-bg" data-aos="fade-up">
                           <i className=""><img src={icon2} /></i>
                           <h3><a href="data-analytics.html">{props.headtwo}</a></h3>
                            <a href="data-analytics.html" className="learn-btn">{props.learn} <i className="bx bx-chevron-right"></i></a>
                        </div>
                     </div>
                   <div className="col-lg-4 col-sm-4">
                        <div className="services-card services-card-color-bg" data-aos="fade-up">
                          <i className=""><img src={icon3}  /></i>
                           <h3><a href="agile-project-delivery.html">{props.headthree}</a></h3>
                           <a href="agile-project-delivery.html" className="learn-btn">{props.learn} <i className="bx bx-chevron-right"></i></a>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
);
}

export default Thirdsec_home;