import React, { Component } from 'react';
import cx from 'classnames';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './style.css';

class Contact extends Component {
  constructor() {
    super();
  
    this.state = {
      hideCaret: false,
    };
    
    this.scrollTo = this.scrollTo.bind(this);
  }
  
  scrollTo(e) {
    let scrollTop = e.target.documentElement.scrollTop;
    if (scrollTop > 150 ) {
      console.log(`ay`);
      this.setState({hideCaret: true});
    } else {
      console.log(`yo`);
      this.setState({hideCaret: false});
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.scrollTo);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollTo);
  }
  
  render() {
    console.log(this.props);
    
    return (
      <section className="main">
        <div className="background" >
          <div className="bg1" style={{height: '100%', width: '100%'}}>
          </div>
        </div>
        <div className="social-1">
          <a href="https://open.spotify.com/artist/27J2RCywR8h3PP8nQ7BXju" ><i className="link fab fa-spotify"></i></a>
          <a href="https://twitter.com/honeytapmusic" ><i className="link fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/honeytapmusic/" ><i className="link fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/honeytapmusic/" ><i className="link fab fa-instagram"></i></a>
        </div>
        <Link style={{display: this.state.hideCaret ? 'none' : 'inline-block'}}  className="caret" activeClass="active" to="section2" spy={true} smooth={true} duration={500}>
          <i className="fas fa-caret-down"></i>
        </Link>
        <div className="space"></div>
        <div name="section2" ref="hello" className="section-2">
          <div className="logo-sec-1">
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/logo1b.png" alt="lilbee" className="lilbee"/>
          </div>
          <div className="album-title">
            <h1>HONEYTAP</h1>
            <h1><i>SELF-TITLED</i></h1>
            <h1>2 0 1 7</h1>
          </div>
          {/*INSERT PLAYER DIV HERE*/}
          <div className="player" >
            <div className="player-mobile">
              <iframe src="https://open.spotify.com/embed?uri=spotify:album:0oiPEywtIvHVF2NRg52qVK" width="300" height="280" frameborder="0" allowtransparency="true"></iframe>
            </div>
            <div className="player-desktop">
              <iframe src="https://open.spotify.com/embed?uri=spotify:album:0oiPEywtIvHVF2NRg52qVK" width="700" height="300" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </div>
          <div className="song-links">
            <a href="https://geo.itunes.apple.com/us/album/honey-tap-single/1320362918?mt=1&app=music&itscg=30200&itsct=afftoolset_1">
              <div className="song-link">
                <img className="link-image" width="125px" height="40px" src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_itunes.svg" alt="itunes"/>
                <span className="link-text">Go To</span>
              </div>
            </a>
            <a href="https://www.amazon.com/Honey-Tap/dp/B077XG2RG9/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1515953416&sr=1-1-mp3-albums-bar-strip-0&keywords=Honey+Tap">
              <div className="song-link">
                <img className="link-image" width="125px" height="40px" src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_amazon.svg" alt="amazon"/>
                <span className="link-text">Download</span>
              </div>
            </a>
            <a href="https://play.google.com/store/music/album/Honey_Tap_Honey_Tap?id=Btjc2om5cz3lufwhentmbxohrgi&hl=en">
              <div className="song-link">
                <img className="link-image" width="125px" height="40px" src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_google-play.svg" alt="google"/>
                <span className="link-text">Download</span>
              </div>
            </a>
          </div>
          <div className="contact">
            <p>Artist Representation:</p>
            <p>Midcoast Artist Management</p>
            <br/>
            <p>Manager:</p>
            <p>
              {`Jeff Waluch - `}
              <a href="mailto:MidcoastProduction@yahoo.com" className="contact-link">
                <span>MidcoastProduction@yahoo.com</span>
              </a>
            </p>
            <br/>
            <br/>
            <p>
              {`Website by: `}
              <a href="https://www.linkedin.com/in/ajfarleyengineer/" className="contact-link">
                AJ Farley
              </a>
            </p>
          </div>
          <hr className="rule"/>
          <div className="footer-logo">
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/logo2b.png" alt="bee" className="bottom-bee"/>
          </div>
          <div className="social-2">
            <a href="https://open.spotify.com/artist/27J2RCywR8h3PP8nQ7BXju" ><i className="link fab fa-spotify"></i></a>
            <a href="https://twitter.com/honeytapmusic" ><i className="link fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/honeytapmusic/" ><i className="link fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/honeytapmusic/" ><i className="link fab fa-instagram"></i></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;