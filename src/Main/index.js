import React, { Component } from 'react';
import cx from 'classnames';

import './style.css';

class Contact extends Component {
  constructor() {
    super();
  
    this.state = {
      bg1: false
    };
  }
  
  render() {
    return (
      <section className="main">
        <div className="background" >
          <div className="bg1" style={{height: '100%', width: '100%', opacity: this.state.bg1 ? {opacity: .55} : {opacity: .55}}}></div>
        </div>
        <div className="space"></div>
        <div className="section-2">
          <div className="logo-sec-1">
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/smallbee.png" alt="lilbee" className="lilbee"/>
          </div>
          <div className="album-title">
            <h1>HONEYTAP</h1>
            <h1><i>SELF-TITLED</i></h1>
            <h1>2 0 1 7</h1>
          </div>
          <div style={{top:100, position: 'relative'}}>
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/screen1.png" alt="screen1" className="screens"/>
          </div>
          <div>
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/screen2.png" alt="screen2" className="screens"/>
          </div>
          <div className="contact">
            <p>Artist Representation:</p>
            <p>Midcoast Artist Management</p>
            <p>Manager:</p>
            <p>Jeff Waluch - MidcoastProduction@yahoo.com</p>
          </div>
          <div className="contact">
            <p>website by:</p>
            <p>AJ Farley</p>
          </div>
          <div style={{padding: '100px 0'}}>
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/logo3.png" alt="bee" className="footerlogo"/>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;