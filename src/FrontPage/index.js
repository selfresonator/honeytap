import React, { Component } from 'react';

import './style.css';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return (
      <section className="front-page">
        <div className="cover">
          {/*<img src="https://s3-us-west-1.amazonaws.com/honeytapmusic/HTLOGO.png" alt="lilbee" className="lilbee"/>*/}
        </div>
      </section>
    );
  }
}

export default FrontPage;
