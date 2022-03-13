import React from "react";
import Menu from "./Menu";
import Contact_banner from "./Contact_banner";

import Contact_content from "./Contact_content";

import Footer from "./Footer"

function Contact(){

return (
<>
<Menu />

<Contact_banner />

<Contact_content contacttitle1="We Connect Top Talents To The Right Workforce" contactinfo="Contact Info"
contacttitle2="Find Your Next Job" contactpara1="We help our ambitious clients join the best companies"
phone="Phone Number" add="Address" contactinfos="Contact Info"


/>

<Footer />

</>


);






}

export default Contact;