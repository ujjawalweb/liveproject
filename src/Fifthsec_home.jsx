import React from "react";

import inno from "./innovative-solutions.jpg";

import cro from "./collaborative-methodology.jpg";

import tran from "./transformationa-designs.jpg"
import { propTypes } from "react-bootstrap/esm/Image";

function Fifthsec_home(props){

return (

<>


<div className="container">

<div className="row featurette mtps">
      <div className="col-md-6 align-self-center section-title">
        <h2 className="">{props.titlefive}</h2>
        <p className="lead">{props.parafive}</p>
      </div>
      <div className="col-md-6">
     <img src={inno}  width="580"/>

      </div>
    </div>

   

    <div className="row featurette mtps">
      <div className="col-md-6 order-md-2 align-self-center section-title">
        <h2 className="featurette-heading">
{props.titlefive2}</h2>
        <p className="lead">{props.parafive2}</p>
      </div>
      <div className="col-md-6 order-md-1">
      <img src={cro}  width="580"/>

      </div>
    </div>



    <div className="row featurette mtps">
      <div className="col-md-6 align-self-center section-title">
        <h2 className="featurette-heading">{props.titlefive3}</h2>
        <p className="lead">{props.parafive3}</p>
      </div>
      <div className="col-md-6">
      <img src={tran}  width="580"/>

      </div>
    </div>
    </div>










</>


);




}

export default Fifthsec_home;