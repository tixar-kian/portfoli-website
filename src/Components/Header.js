import React, { Component } from 'react';
import vd from '../Resources/AboutMe.mp4';
import click from '../Resources/Play.jpg';

class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  handleScroll = () => {
     if(window.scrollY !== 0)
     {this.refs.vidRef.pause()}
     else
     {this.refs.vidRef.play()
    }
  }
  play(){
    var promise = document.querySelector('video').play();
    if (promise !== undefined) {
      promise.then(_ => {
       this.refs.vidRef.play()
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
        console.log(error)
      });
    }
  }
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
      <video autoPlay loop allow="autoplay" controlsList="nodownload" controls={true} width="100%" ref="vidRef" poster={click}>
      <source src={vd} type="video/mp4"/>
 </video>
      <p className="scrolldown">
         <a className="smoothscroll" href="#resume" ><i className="icon-down-circle"></i></a>
      </p>
      

   </header>
    );
  }
}

export default Header;
