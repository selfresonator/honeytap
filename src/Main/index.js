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
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/logo1.png" alt="lilbee" className="lilbee"/>
          </div>
          <div className="album-title">
            <h1>HONEYTAP</h1>
            <h1><i>SELF-TITLED</i></h1>
            <h1>2 0 1 7</h1>
          </div>
          <div className="player" >
            <div className="player-mobile">
              <iframe src="https://open.spotify.com/embed?uri=spotify:album:0oiPEywtIvHVF2NRg52qVK" width="300" height="280" frameborder="0" allowtransparency="true"></iframe>
            </div>
            <div className="player-desktop">
              <iframe src="https://open.spotify.com/embed?uri=spotify:album:0oiPEywtIvHVF2NRg52qVK" width="500" height="300" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </div>
          <div>
            {/*<img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/screen2.png" alt="screen2" className="screens"/>*/}
          </div>
          <div className="contact">
            <p>Artist Representation:</p>
            <p>Midcoast Artist Management</p>
            <br/>
            <p>Manager:</p>
            <p>Jeff Waluch - MidcoastProduction@yahoo.com</p>
            <br/>
            <br/>
            <p>website by: AJ Farley</p>
          </div>
          <div style={{padding: '70px 0'}}>
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/logo2.png" alt="bee" className="footerlogo"/>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;