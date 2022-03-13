import React from "react";
import Particles from "react-tsparticles";

import Secondsec_home  from  "./Secondsec_home";

import Thirdsec_home from "./Thirdsec_home";

import Fourthsec_home from "./Fourthsec_home";

import Fifthsec_home from "./Fifthsec_home";

import Middleban_home from "./Middleban_home";
import Menu from "./Menu";
import Footer from "./Footer";

function Home(){

    return (
        <>
        <Menu />

<section>
<Particles canvas="ujj"
        params={{
          fpsLimit: 60,
          
          particles: {
            color: {
              value: "#fff"
            },
        

            links: {
              enable: true,
              color: "#fff",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
</section>


<Secondsec_home paraone=" Vayuna LLC is of the opinion that applicable innovation is the best response to the ever-changing and intimidating challenges of the new world. Therefore, it is wise to embrace the new technologies and methodologies of business and working. This way, you can be prepared to deliver the best results in the most crucial times." 

paratwo="Our objective is to provide considerable advantages to our customers that give them an edge over their competitors. We do this by employing our validated practices, network accelerators, and cutting-edge technology to create long-term value with the customer. As a result, our customers stay a step ahead of their industry counterparts."

parathree="We believe in taking a co-creating approach with our customers at each step of their journey. As a result, our digital products deliver transformative results as we initiate the operations from the idea of business goal and fabricate the entire process to deliver the most effective results. Our ecosystem benefits from enhanced expertise in human-centered design, breakthrough innovation, and R&D, confirming our leadership in transformation, invention, and reinvention."
/>

<Thirdsec_home   title2="Our expertise"  headone="Cloud Migration services" headtwo="Data & Analytics" headthree="Agile Project Delivery"
learn="Learn More"

/>

<Fourthsec_home title4="Our Service Solutions Include" />

<Fifthsec_home titlefive="Innovative Solutions" parafive="We develop and deploy solutions that are not only technologically advanced but are also optimized in the most creative and innovative manner. We tend on deriving solutions that can adjust well to the ever-changing tapestry of the business and technological world." 
titlefive2="
Collaborative Methodology"   parafive2="Our process of developing solutions involves close involvement with the concerned client. We ensure that the pedagogy explained in plans and the practicality delivered in the effective resulting products is in compliance with the needs and goals of the client’s business."

titlefive3="Transformational Designs and Diligent Research" parafive3="We dedicate a considerable amount of time and resources to the research, development, and designs of our products. Any product is as functional as its design and is as effective as its research. Our R&D teams conduct meticulous research to cover all the bases of your objective"
/>

<Middleban_home  aboutbanner="About  Us"  middlebantext="Vayuna is a software development and solutions company that believes in delivering quality web-oriented applications, data & analytics, agile projects, mobile apps development, business software solutions & integration, and many more IT services. We operate out of Frisco, Texas, USA"

middlebantext2="Connect with us and find the best career opportunities in IT Services & Solutions development."
/>

<Footer />

      </>


    );



}





export default Home;



