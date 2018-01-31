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
        </div>
      </section>
    );
  }
}

export default FrontPage;
