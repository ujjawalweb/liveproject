import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function Contact_content(props){

return (
<>
<div className="contact-form-area pt-100 pb-70" data-aos="fade-up">
         <div className="container">
            <div className="section-title text-center">
               <h2>{props.contacttitle1}</h2>
            </div>
            <div className="row pt-45">
               <div className="col-lg-4 mt-5" data-aos="fade-right">
                  <div className="contact-info mr-20">
                     <span>{props.contactinfo}</span>
                     <h2>{props.contacttitle2}</h2>
                     <p>{props.contactpara1}</p>
                     <ul>
                        <li>
                           <div className="content">
                            
                              <h3>{props.phone}</h3>
                              <a href="">929-297-2527</a>
                           </div>
                        </li>

                        <br />
                        <li>
                           <div className="content">
                      
                              <h3>{props.add}</h3>
                              <span>4204 Addax Trl Frisco, TX 75034</span>
                           </div>
                        </li>

                        <br />
                        <li>
                           <div className="content">
                              <i className='bx bx-message'></i>
                              <h3>{props.contactinfos}</h3>
                              <a href="">accounts@vayunaconsulting.com</a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-8 mt-5" data-aos="fade-left">
                                       
			   
                  <div className="contact-form">
                     <form id="" Method="POST" novalidate="novalidate">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="form-group">
                                 <label>Your Name <span>*</span></label>
                                 <input type="text" name="name" id="name" className="form-control" required data-error="Please Enter Your Name" placeholder="Name" />
                                 <div className="help-block with-errors"></div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-group">
                                 <label>Your Email <span>*</span></label>
                                 <input type="email" name="email" id="email" className="form-control" required data-error="Please Enter Your Email" placeholder="Email" />
                                 <div className="help-block with-errors"></div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-group">
                                 <label>Phone Number <span>*</span></label>
                                 <input type="text" name="phone" id="phone_number" required data-error="Please Enter Your number" className="form-control" placeholder="Phone Number" />
                                 <div className="help-block with-errors"></div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-group">
                                 <label>Your Subject <span>*</span></label>
                                 <input type="text" name="subject" id="msg_subject" className="form-control" required data-error="Please Enter Your Subject" placeholder="Your Subject" />
                                 <div className="help-block with-errors"></div>
                              </div>
                           </div>
                           <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                 <label>Your Message <span>*</span></label>
                                 <textarea name="message" className="form-control" id="message" cols="30" rows="8" required data-error="Write your message" placeholder="Your Message"></textarea>
                                 <div className="help-block with-errors"></div>
                              </div>
                           </div>
                           <div className="g-recaptcha" data-sitekey="6LdAe3IdAAAAANZy3oSghyTwsNuQcqtfppCwB_zw"></div>
                           
                           <div className="col-lg-12 col-md-12 text-center">
                              <button type="submit" name="submit" className="default-btn btn-bg-two border-radius-50">
                              Send Message <i className='bx bx-chevron-right'></i>
                              </button>
                              <div id="msgSubmit" className="h3 text-center hidden"></div>
                              <div className="clearfix"></div>
                           </div>
                           
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>


</>



);


}

export default Contact_content;







