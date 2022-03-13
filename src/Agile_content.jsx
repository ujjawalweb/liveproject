import React from "react"

import imgs1 from "./org.jpg";

import imgs2 from "./pri.jpg"

import icon1 from "./cloud-1.png"
import icon2 from "./cloud-2.png"



function Agile_content(props){

return(
<>

<div className="about-area ptb-100" data-aos="fade-left">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-8 mt-5">
                  <div className="about-content mr-20">
                     <div className="section-title">
                        <span className="subtitle">
                           <h2>Agile Project Delivery</h2>
                        </span>
                        <div className="text-about">
                           <p>
                           Agile Project Management ensures that feedback can be acted quickly and that responsive changes can be made at every sprint and product cycle stage.

It allows project teams to adopt agile project management methods to work quickly or collaboratively within the timeframe and budget of the projects.

Agile project management covers various agile project management methodologies, all of which draw on some shared agile principles or core values.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>  


<div className="container-fluid bg-darks p-5">
    <div className="container">
         <div className="row featurette">
      <div className="col-md-6 section-title mt-5 align-self-center">
        <h2 className="">{props.agiletitle1}</h2>

        <p className="text-white">{props.agilepara1a}</p>
        <p className="text-white">{props.agilepara1b}</p>

        <p className="text-white">{props.agilepara1c}</p>
        <p className="text-white">{props.agilepara1d}</p><br />
        <p className="text-white">{props.agilepara1e}</p>
      </div>
      <div className="col-md-6 mt-5">
      <img src={imgs1} className="delivers" />

      </div>
    </div>
    </div>
    </div>


 <div className="container">
    <div className="row featurette">
      <div className="col-md-6 order-md-2 section-title mt-5 align-self-center mleft">
        <h2 className="">{props.agiletitle2}</h2>
        <p className="">{props.agilepara2}</p>
    


      </div>

      <div className="col-md-5 order-md-1 mt-5">
      <img src={imgs2} className="delivers" />



     
  </div>
  </div>
  </div>


  <section className="work-process-area pt-100 pb-70 bg-light mt-5" data-aos="fade-up">
         <div className="container">
            <div className="section-title text-center">
               <h2>{props.agiletitle3}</h2>
               <div className="deliver"></div>
               <p className="text-center">{props.agilepara3}</p>
            </div>
            <div className="row pt-45">
               <div className="col-lg-6 col-sm-12 mt-4" data-aos="fade-right">
                  <div className="work-process-card">
                     <i className=""><img src={icon1} /></i>
                     <h3>{props.less}</h3>
                     <p>{props.lesspara} </p>
                     <div className="number">01</div>
                  </div>
               </div>
               <div className="col-lg-6 col-sm-12 mt-4" data-aos="fade-left">
                  <div className="work-process-card">
                     <i className=""><img src={icon2} /></i>
                     <h3>{props.good}</h3>
                     <p>{props.goodpara}</p>
                     <div className="number">02</div>
                  </div>
               </div>

            




            </div>
         </div>
      </section>

 

    <div className="container-fluid  bg-light p-5">
        <div className="container">
 <div className="row">
<div className="col-md-12">

    <p>{props.footlast}</p>
</div>

 </div>
 </div>


    </div>


</>

);


}

export default Agile_content;



