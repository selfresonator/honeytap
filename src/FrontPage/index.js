import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return (
      <Link href="/main">
        <section className="front-page">
          <div className="cover">
            <img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/HTLOGOWhite.png" alt="lilbee" className="lilbee"/>
            <div className="front-links">
              <a href="https://open.spotify.com/artist/27J2RCywR8h3PP8nQ7BXju" ><i className="link-front fab fa-spotify"></i></a>
              <a href="https://geo.itunes.apple.com/us/album/honey-tap-single/1320362918?mt=1&app=music&itscg=30200&itsct=afftool" ><i className="link-front fab fa-itunes"></i></a>
              <a href="https://www.soundcloud.com/honeytap/" ><i className="link-front fab fa-soundcloud"></i></a>
            </div>
            <p className="enter">ENTER</p>
          </div>
        </section>
      </Link>
    );
  }
}

export default FrontPage;
