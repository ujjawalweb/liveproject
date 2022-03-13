import React from "react";
import Menu from "./Menu";
import Blog_banner from "./Blog_banner"

import Blog_content from "./Blog_content";
import Footer from "./Footer"

function Blog(){

return (
<>
<Menu />

<Blog_banner />
<Blog_content blogtitle1="Common myths and misconceptions around cloud solutions." blogpara1="The history of Cloud systems dates back to the 1960s when IBM achieved the first milestone of virtualizing OS. Since then, many significant advancements have made the Cloud what it is today. More than 60 years have pa..."

blogtitle2="Steps to consider before initiating master data management." blogpara2="Many businesses today, especially global enterprises, have various distinguished applications and systems (i.e., ERP, CRM) where data that crosses organizational departments or divisions can quickly become fragmented,..."
blogtitle3="Why do we need Agile project management?" blogpara3="However, the arguments are compelling; eAgile is a philosophy that focuses on empowered people and their interactions and early and constant delivery beneficial for an organization. Agile has sustainable appeal and ha..."

small1=" Common myths and misconceptions around cloud solutions. "  small2="Steps to consider before initiating master data management." small3="Why do we need Agile project management?"
/>



<Footer />
</>


);






}

export default Blog;