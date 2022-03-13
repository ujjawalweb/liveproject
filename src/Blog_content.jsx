import React from "react";


import blog1 from "./blg1.jpg";
import blog2 from "./blg2.jpg";
import blog3 from "./blg3.jpg";

function Blog_content(props){

return(

<>

<div className="blog-style-area pt-100 pb-70">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="row">
				                       <div className="col-lg-12"  data-aos="fade-up">
                        <div className="blog-style-card">
                           <div className="blog-style-img">
                            
                              <img src={blog1} alt="expert consultants, consulting firm" className="blg1" />
                              <div className="blog-style-tag">
                                 <h3>08</h3>
                                 <span>Nov</span>
                              </div>
                            
                           </div>
                           <div className="content mt-4">
                              <ul>
                                 <li><i className='fa fa-user'></i> &nbsp;  By Admin</li>
                                 <li><i className='fa fa-calendar'></i> &nbsp;  08&nbsp;&nbsp;Nov,&nbsp;2021&nbsp;</li>
                              </ul>
							   
					
						<h2>{props.blogtitle1}</h2>
                    
						<p>{props.blogpara1}</p>
                             
                             
                              <button className="default-btn btn-bg-two border-radius-50">Learn More </button>
                           </div>
                        </div>
                     </div>
					                     <div className="col-lg-12 mt-4"  data-aos="fade-up">
                        <div className="blog-style-card">
                           <div className="blog-style-img">
                          
                              <img src={blog2} alt="expert consultants, consulting firm"  className="blg1" />
                              
                              <div className="blog-style-tag">
                                 <h3>08</h3>
                                 <span>Nov</span>
                              </div>

                           </div>
                           <div className="content mt-4">
                           <ul>
                                 <li><i className='fa fa-user'></i> &nbsp;  By Admin</li>
                                 <li><i className='fa fa-calendar'></i> &nbsp;  20&nbsp;&nbsp;Nov,&nbsp;2021&nbsp;</li>
                              </ul>
							   
					
						<h2> {props.blogtitle2}</h2>
                          
                        
						<p>{props.blogpara2}</p>
                        <button className="default-btn btn-bg-two border-radius-50">Learn More </button>
                           </div>
                        </div>
                     </div>
					                     <div className="col-lg-12 mt-4"  data-aos="fade-up">
                        <div className="blog-style-card">
                           <div className="blog-style-img">
                            
                              <img src={blog3} alt="expert consultants, consulting firm"  className="blg1" />
                              

                              <div className="blog-style-tag">
                                 <h3>08</h3>
                                 <span>Nov</span>
                              </div>
                           
                           </div>
                           <div className="content mt-4">
                           <ul>
                                 <li><i className='fa fa-user'></i> &nbsp;  By Admin</li>
                                 <li><i className='fa fa-calendar'></i> &nbsp;  3&nbsp;&nbsp;Dec,&nbsp;2021&nbsp;</li>
                              </ul>
							   
					
						<h2>{props.blogtitle3}</h2>
                           
                    
						<p>{props.blogpara3}</p>
                             
                        <button className="default-btn btn-bg-two border-radius-50">Learn More </button>
                           </div>
                        </div>
                     </div>
					                    
                  </div>
               </div>
               <div className="col-lg-4"  data-aos="fade-up">
                  <div className="side-bar-area">
             
                  
                     <div className="side-bar-widget">
                        <h3 className="title">Latest Blog</h3>
                        <div className="widget-popular-post">
						                           <article className="item">
                              <a href="blog/common-myths-and-misconceptions-around-cloud-solutions.html" className="thumb">
                              <span className="full-image">
                                 <img src={blog1} alt="expert consultants, consulting firm" className="small-img"  />
                              </span>
                              </a>
                              <div className="info">
                                 <h4 className="title-text">
                            
                                {props.small1}                                 
                                 </h4>
                                 <p>08&nbsp;&nbsp;Nov,&nbsp;&nbsp;2021</p>
                              </div>
                           </article>
								                           <article className="item">
                              <a href="blog/steps-to-consider-before-initiating-master-data-management.html" className="thumb">
                              <span className="full-image">
                                 <img src={blog2} alt="expert consultants, consulting firm" className="small-img"  />
                              </span>
                              </a>
                              <div className="info">
                                 <h4 className="title-text">
                           
                               {props.small2}                                   
                                 </h4>
                                 <p>20&nbsp;&nbsp;Nov,&nbsp;&nbsp;2021</p>
                              </div>
                           </article>
								                           <article className="item">
                              <a href="blog/why-do-we-need-agile-project-management.html" className="thumb">
                              <span className="full-image">
                                 <img src={blog3} alt="expert consultants, consulting firm"  className="small-img" />
                              </span>
                              </a>
                              <div className="info">
                                 <h4 className="title-text">
                           
                                 {props.small3}                                   
                                 </h4>
                                 <p>03&nbsp;&nbsp;Dec,&nbsp;&nbsp;2021</p>
                              </div>
                           </article>
								                       </div>
                     </div>
                    
                     
                  </div>
               </div>            </div>
         </div>
      </div>

</>



);



}
export default Blog_content;





