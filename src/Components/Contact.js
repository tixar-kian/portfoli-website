import React, { Component } from 'react';

class Contact extends Component {
   
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var occupation = this.props.data.occupation;
    }
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="ten columns header-col">

            <h1><span>Get In Touch.</span></h1>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="mailto:raxit20@gmail.com?subject=Feedback" method="post"  enctype="text/plain" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="Name:">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="Name:" onChange={this.handleChange}/>
                  </div>
                  <div>
                     <label htmlFor="Message:">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="Message:"></textarea>
                  </div>
                  <div>
                  <button className="submit" type="submit">Submit</button>                     
                  </div>
					</fieldset>
				   </form>
           </div>
               <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>{name}</h4>
					   <p className="address">
						   {occupation} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

              
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
