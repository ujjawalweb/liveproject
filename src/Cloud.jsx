import React from "react";
import Menu from "./Menu"

import Cloud_banner from "./Cloud_banner";

import Cloud_content from "./Cloud_content";


import Footer from "./Footer"

function Cloud(){

    return (
<>

<Menu />

<Cloud_banner />

<Cloud_content  cloudtitle1="Reasons to Partner with Vayuna LLC"  
cloudpara1="We can help you migrate, manage and monitor your most critical applications and data resources on the cloud. Our objective is to provide considerable advantages to our customers/partners and give them an edge over their competitors. We employ validated practices, network accelerators, and cutting-edge technology to create long-term value with the customer. As a result, our customers stay a step ahead of their counterparts in the industry."
       
cloudtitle2="Migration Planning & Design, Workload Migration & Core Infrastructure Modernization"  

cloudpara2="We can create a concrete blueprint for your cloud transformation - defining what should be moved and how we can help you to get there.
Bring the blueprint of your cloud migration strategy to life by moving your applications from on-premise to the cloud in a cost-efficient and secure way.
Reinvent how your applications and infrastructure are built using cloud-native technologies such as microservices, containers, and serverless computing."

cloudtitle3="Reduce Risk and improve performance" cloudpara3="Vayuna LLC Cloud Migration Services can help companies to improve performance and realize savings. We can help you create a plan, assess products, and decide how to migrate each product. In addition, we can help you to manage the solutions and monitor the effectiveness of your cloud migration program"
mig="Cloud Migration Preparation" migpara="Vayuna LLC Cloud Migration Preparation will generate a valuation of the current status compared to an ideal state. We can prioritize the focus areas for an optimal migration strategy. We can provide company-wide visibility of the possible outcomes of a migration and We can determine which parts of the products should be migrated or should not be migrated. We can provide a readiness assessment for each area of the company."

stag="Cloud Migration Strategy" stagpara="Vayuna LLC Cloud Migration Strategy will analyze in-depth all aspects of your on-prem environment. We can determine which parts of the solutions should remain on-prem and can generate a phased migration plan with possible exit strategies for each phase. We can define acceptance criteria for short, mid, and for long-term periods and determine how to leverage existing cloud services and define a migration strategy based on desired outcome and cloud leverage."

cloudtitle4="What Role Do We Play?"  cloudpara4="We house teams of highly talented engineers to migrate your on-prem solution to the cloud based on the strategy defined. In addition, we can analyze and make recommendations to improve upon existing processes and tools to maximize cloud adoption."

cloudpara5="We house teams of highly talented engineers to migrate your on-prem solution to the cloud based on the strategy defined. In addition, we can analyze and make recommendations to improve upon existing processes and tools to maximize cloud adoption."

cloudpara6="We can propose the best practices and technologies for your cloud environment. In addition, we can simplify the engagement with a flexible model to ramp up/down based on infrastructure needs and provide ongoing services to mature your strategy over time."

footlast="Snippet : Vayuna LLC works with you to determine the right cloud strategy, operating model, roadmap, and ecosystem partnerships. As a result, we can help you execute a seamless migration and modernization to Cloud."

/>

<Footer />


                         



                    

</>



    );




}

export default Cloud;