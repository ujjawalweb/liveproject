import React from "react";

import logo from "./logo.png"
import { Link } from "react-router-dom";

function Footer(){

return(
<>
<footer className="footer-area footer-bg" >
         <div className="container">
            <div className="footer-top pt-100 pb-70">
               <div className="row">
                  <div className="col-lg-4 col-sm-6">
                     <div className="footer-widget">
                        <div className="footer-logo">
                           <a href="index.html">
                           <img src={logo} alt="top consulting firms, software consulting" />
                           </a>
                        </div>
                        <p>
                           Vayuna is a software development and solutions company that believes in delivering quality web-oriented applications, data & analytics, agile projects, mobile apps development, business software solutions & integration, and many more IT services. 
                        </p>
                       
                     </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                     <div className="footer-widget pl-2">
                        <h3>Quick Links</h3>
                        <hr />
                        <ul className="footer-list">
                           
                           <li>
                              <Link to="/">
                              <i className='bx bx-chevron-right'></i>
                              Home
                              </Link>
                           </li>
                          <li>
                              <Link to="/career">
                              <i className='bx bx-chevron-right'></i>
                              Career
                              </Link>
                           </li>
                           <li>
                              <Link to="/blog">
                              <i className='bx bx-chevron-right'></i>
                              Blog
                              </Link>
                           </li>
                           <li>
                              <Link to="/contact">
                              <i className='bx bx-chevron-right'></i>
                              Contact Us
                              </Link>
                           </li>
                           
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="footer-widget pl-5">
                        <h3>Our Services</h3>
                        <hr />
                        <ul className="footer-list">
                           
                           <li>
                              <Link to="/cloud">
                              <i className='bx bx-chevron-right'></i>
                              Cloud Migration services
                              </Link>
                           </li>
                           <li>
                              <a href="data-analytics.html">
                              <i className='bx bx-chevron-right'></i>
                             Data & Analytics
                              </a>
                           </li>
                           <li>
                              <Link to="/Agile">
                              <i className='bx bx-chevron-right'></i>
                             Agile Project Delivery
                              </Link>
                           </li>
                           </ul>
                     </div>
                  </div>
                                    <div className="col-lg-3 col-sm-6">
                     <div className="footer-widget">
                        <h3>Newsletter</h3>
                        <hr />
                        <p>Subscribe to our newsletter to get regular and exclusive updates </p>
                        <div className="newsletter-area">
                                                       <form className="newsletter-form" action="#"  method="POST" >
                              <input type="text" className="form-control" placeholder="Enter Your Email" name="email" required />
                              <button className="subscribe-btn" name="submit" type="submit">
                              <i className='bx bx-paper-plane'></i>
                              </button>
                              <div id="" className="form-result"></div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copy-right-area">
               <div className="copy-right-text">
                  <p>
                     Copyright ©2021 Vayuna LLC. All Rights Reserved by
                     <a href="https://zonewebsites.com/" target="_blank">Zonewebsites.com</a>
                  </p>
               </div>
            </div>
         </div>
      </footer>


</>



);




}

export default Footer;


