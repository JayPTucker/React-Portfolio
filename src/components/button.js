import React, { Component } from 'react';
import './ButtonComponent.css'; // Import your CSS file

class ButtonComponent extends Component {
  render() {
    return (
      <a
        className="myResumeBtn flashingBackground"
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1EJdzVG4qJjfpTwqXrnh_knmB5JlADeye/view?usp=sharing"
      >
        Check out my Resume
      </a>
    );
  }
}

export default ButtonComponent;
