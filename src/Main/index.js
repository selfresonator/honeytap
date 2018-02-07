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
          <a href="" ><i className="link fab fa-facebook-square"></i></a>
          <a href="" ><i className="link fab fa-spotify"></i></a>
          <a href="" ><i className="link fab fa-instagram"></i></a>
          <a href="" ><i className="link fab fa-twitter"></i></a>
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
            <div className="song-link">
              <img className="link-image" width="125px" height="40px" src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_itunes.svg" alt="itunes"/>
              <span className="link-text">Go To</span>
            </div>
            <div className="song-link">
              <img className="link-image" width="125px" height="40px" src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_amazon.svg" alt="amazon"/>
              <span className="link-text">Download</span>
            </div>
            <div className="song-link">
              <img className="link-image" width="125px" height="40px" src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_google-play.svg" alt="google"/>
              <span className="link-text">Download</span>
            </div>
          </div>
          {/*<div>*/}
            {/*<img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/screen2.png" alt="screen2" className="screens"/>*/}
          {/*</div>*/}
          <div className="contact">
            <p>Artist Representation:</p>
            <p>Midcoast Artist Management</p>
            <br/>
            <p>Manager:</p>
            <p>Jeff Waluch - MidcoastProduction@yahoo.com</p>
            <br/>
            <br/>
            <p>Website by: AJ Farley</p>
          </div>
          <hr className="rule"/>
          <div className="footer-logo">
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/logo2b.png" alt="bee" className="bottom-bee"/>
          </div>
          <div className="social-2">
            <a href="" ><i className="link fab fa-facebook-square"></i></a>
            <a href="" ><i className="link fab fa-spotify"></i></a>
            <a href="" ><i className="link fab fa-instagram"></i></a>
            <a href="" ><i className="link fab fa-twitter"></i></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;