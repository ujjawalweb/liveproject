import React from "react";

import Menu from "./Menu";
import Data_banner from "./Data_banner";

import Data_content from "./Data_content";

import Footer from "./Footer"

function Data(){

return (
<>
<Menu />

<Data_banner />

<Data_content   datatitle1="What we can deliver"  datapara1="Today, every company faces various kinds of challenges when it comes to delivering value. Data-led Transformation can leverage modern platforms, Artificial intelligence, and a strong data foundation to give you a deeper view and help to determine the right path to the value.

Data-led Transformation improves the maturity of your data and Artificial intelligence capabilities to deliver core business value by monetizing your business strategy and maximizing efficiencies.

It can build an ecosystem of partners to extend our capabilities and, thus, create new opportunities for engagement and a better customer experience.

Leveraging data and Artificial intelligence to extend into new domains and reinvent your offerings, you can scale to meet changing demand and priorities."

datatitle2="Our core capabilities"
datapara2a="We can identify critical data for business change and unlock the greatest value for the company."
datapara2b="Enable a trusted approach to ensure that the data or critical data is well managed and maintained to be leveraged to develop differentiating capabilities."

datapara2c="With us, you can Build a secure data foundation and cloud architecture that can harness data into a deeper view into the organization to meet current needs flexibly to scale for the future."

datatitle3="Data Management"
datapara3="The Data needs to be well organized and high quality before it can be analyzed. While the data is constantly flowing in and out of an organization, it is vital to build & maintain standards for data quality."

science="Data Science and Spark"
sciencepara="Data Science team focuses on providing implementation and strategy around Data Science and Spark."

virtual="Data Virtualization"

virtualpara="Vayuna LLC has highly talented teams focused on modern tools and bringing together federated data sources into one place for various Big Data programs."

busi="Business Intelligence and Analytics"

busipara="Big Data can only provide value if it is intelligible and useful. So we work with a range of Business Intelligence and Data Visualization tools to help you make sense of your data."


footlast="Snippet : Vayuna LLC can provide the ability to companies to access the data anytime, anywhere, and run real-time streaming analytics to transform data insight into impact."
/>

<Footer />

</>



)


}

export default Data;