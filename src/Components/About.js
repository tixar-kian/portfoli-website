import React, { Component } from 'react';

class About extends Component {
  render() {

   if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
    }
    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Raxit Naik Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
         </div>
      </div>
   <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
        </div>
   </div>
  </footer>
  <footer>
   <div className="row">
   <div id="go-top">
      <a className="smoothscroll"  href="#contact"><i className="icon-down-open"></i></a>
      </div>
   </div>
   </footer>
   </section>
    );
  }
}

export default About;
