import React from "react"

import choose from "./choose-img.jpg"

import core from "./our-core-capabilities.jpg"

import icon1 from "./Data-Science-and-Spark.png"
import icon2 from "./data-virtualization.png"
import icon3 from "./Business-Intelligence-and-Analytics.png"


function Data_content(props){

return(
<>

<div className="about-area ptb-100" data-aos="fade-left">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-8 mt-5">
                  <div className="about-content mr-20">
                     <div className="section-title">
                        <span className="subtitle">
                           <h2>Data & Analytics</h2>
                        </span>
                        <div className="text-about">
                           <p>
                           Digital technologies like Data, analytics, and AI (Artificial Intelligence) create new possibilities for companies to grow and differentiate themselves from the competition at an enhanced pace.

About 52% of the companies with future-ready operations use digital solutions like data and analytics at scale. Utilizing data and AI initiatives results in a company that can realize a return on investment at enhanced speed.

With Data-led Transformation, the data becomes the competitive asset and differentiator. By scaling Artificial intelligence with cloud, companies can extend capabilities and improve data and Artificial intelligence maturity to create new sources of value and achieve sustainable growth.

Vayuna LLC can provide the ability to companies to access the data anytime, anywhere, and run real-time streaming analytics to transform data insight into impact.
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
        <h2 className="">{props.datatitle1}</h2>

        <p className="text-white">{props.datapara1}</p>
      </div>
      <div className="col-md-6 mt-5">
      <img src={choose} className="delivers" />

      </div>
    </div>
    </div>
    </div>


 <div className="container">
    <div className="row featurette">
      <div className="col-md-6 order-md-2 section-title mt-5 align-self-center mleft">
        <h2 className="">{props.datatitle2}</h2>
        <p className="">{props.datapara2a}</p>
        <p className="">{props.datapara2b}</p>
        <p className="">{props.datapara2c}</p>


      </div>

      <div className="col-md-5 order-md-1 mt-5">
      <img src={core} className="delivers" />



     
  </div>
  </div>
  </div>


  <section className="work-process-area pt-100 pb-70 bg-light mt-5" data-aos="fade-up">
         <div className="container">
            <div className="section-title text-center">
               <h2>{props.datatitle3}</h2>
               <div className="deliver"></div>
               <p className="text-center">{props.datapara3}</p>
            </div>
            <div className="row pt-45">
               <div className="col-lg-4 col-sm-12 mt-4" data-aos="fade-right">
                  <div className="work-process-card">
                     <i className=""><img src={icon1} /></i>
                     <h3>{props.science}</h3>
                     <p>{props.sciencepara} </p>
                     <div className="number">01</div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 mt-4" data-aos="fade-left">
                  <div className="work-process-card">
                     <i className=""><img src={icon2} /></i>
                     <h3>{props.virtual}</h3>
                     <p>{props.virtualpara}</p>
                     <div className="number">02</div>
                  </div>
               </div>

               <div className="col-lg-4 col-sm-12 mt-4" data-aos="fade-left">
                  <div className="work-process-card">
                     <i className=""><img src={icon3} /></i>
                     <h3>{props.busi}</h3>
                     <p>{props.busipara}</p>
                     <div className="number">03</div>
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

export default Data_content;



