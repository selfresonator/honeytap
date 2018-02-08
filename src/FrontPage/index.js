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
            <p className="enter">ENTER</p>
          </div>
        </section>
      </Link>
    );
  }
}

export default FrontPage;
