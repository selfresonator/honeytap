import React, { Component } from 'react';
import cx from 'classnames';

// import Footer from './Footer/index.js'

import './style.css';

class Contact extends Component {
  constructor() {
    super();
  
    this.state = {
      sec1: false,
      bg1: false,
    };
    
    this.showContent = this.showContent.bind(this);
    this.hideContent = this.hideContent.bind(this);
  }
  
  showContent() {
    this.setState({sec1: true})
  }
  
  hideContent() {
    this.setState({sec1: false})
  }
  
  render() {
    return (
      <section className="main">
        <div className="section-1" onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
          <div className="bg1" style={{height: '100%', width: '100%', opacity: this.state.bg1 ? {opacity: .55} : {opacity: .55}}}></div>
          <p className={cx('text-block-1', {'hidden': this.state.sec1 === false})}>Music</p>
        </div>
        {/*<Footer/>*/}
      </section>
    );
  }
}

export default Contact;