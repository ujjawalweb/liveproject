import React from "react"

import deliver from "./deliver.jpg"

import mig from "./migration-planning.jpg"

import cloud from "./cloud-2.png"

import role from "./role-do-we-play.jpg"

function Cloud_content(props){

return(
<>

<div class="about-area ptb-100" data-aos="fade-left">
         <div class="container">
            <div class="row align-items-center justify-content-center">
               <div class="col-lg-8 mt-5">
                  <div class="about-content mr-20">
                     <div class="section-title">
                        <span class="subtitle">
                           <h2>Cloud Migration services</h2>
                        </span>
                        <div class="text-about">
                           <p>
                              COVID-19 pandemic has created a new inflection point that requires companies to accelerate their cloud migration strategy and lay a new foundation for end-to-end digital transformation. Migration to Cloud is vital for organizations/companies seeking to achieve digital transformation and exploit growth opportunities. Cloud migration can benefit companies, but it is difficult to determine the best strategy to transition smoothly to the cloud. Vayuna LLC works with you to determine the right cloud strategy, operating model, roadmap, and ecosystem partnerships. As a result, we can help you execute a seamless migration and modernization to Cloud.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>  


<div class="container-fluid bg-darks p-5">
    <div class="container">
         <div class="row featurette">
      <div class="col-md-6 section-title mt-5 align-self-center">
        <h2 class="">{props.cloudtitle1}</h2>

        <p class="text-white">{props.cloudpara1}</p>
      </div>
      <div class="col-md-6 mt-5">
      <img src={deliver} class="delivers" />

      </div>
    </div>
    </div>
    </div>


 <div class="container">
    <div class="row featurette">
      <div class="col-md-6 order-md-2 section-title mt-5 align-self-center mleft">
        <h2 class="">{props.cloudtitle2}</h2>
        <p class="">{props.cloudpara2}</p>
      </div>

      <div class="col-md-5 order-md-1 mt-5">
      <img src={mig} class="delivers" />



     
  </div>
  </div>
  </div>


  <section class="work-process-area pt-100 pb-70 bg-light mt-5" data-aos="fade-up">
         <div class="container">
            <div class="section-title text-center">
               <h2>{props.cloudtitle3}</h2>
               <div class="deliver"></div>
               <p class="text-center">{props.cloudpara3}</p>
            </div>
            <div class="row pt-45">
               <div class="col-lg-6 col-sm-12 mt-4" data-aos="fade-right">
                  <div class="work-process-card">
                     <i class=""><img src={cloud} /></i>
                     <h3>{props.mig}</h3>
                     <p>{props.migpara} </p>
                     <div class="number">01</div>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-12 mt-4" data-aos="fade-left">
                  <div class="work-process-card">
                     <i class=""><img src={cloud} /></i>
                     <h3>{props.stag}</h3>
                     <p>{props.stagpara}</p>
                     <div class="number">02</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <div class="container-fluid  p-5">
    <div class="container">
         <div class="row featurette">
      <div class="col-md-6 section-title mt-5 align-self-center">
        <h2 class="">{props.cloudtitle4}</h2>

        <p class="">{props.cloudpara4}</p>
        <p class="">{props.cloudpara5}</p>
        <p>{props.cloudpara6}</p>

      </div>
      <div class="col-md-6 mt-5">
      <img src={role} class="delivers" />

      </div>
    </div>
    </div>
    </div>

    <div class="container-fluid mt-5 bg-light p-5">
        <div class="container">
 <div class="row">
<div class="col-md-12">

    <p>{props.footlast}</p>
</div>

 </div>
 </div>


    </div>


</>

);


}

export default Cloud_content;



