import React from 'react';
import GreenScreenVid from '../img/GSFffm.webm'

function GreenScreenComponent() {
    // Check if the user is using Safari
    const isUsingSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isUsingSafari === true) {
        alert("This Website does not support Safari - Some features may not work as intended.  Please use Chrome or any other browser.")
    } else {
        return (
        
            <div>
              {/* Other content */}
              {isUsingSafari ? (
                <p></p>
              ) : (
                <video autoPlay loop muted className="GreenScreenVid" alt="Gif of me">
                  {/* <source src={GreenScreenGif} type="video/webm" /> */}
                  <source src={GreenScreenVid} type="video/webm" />
                  {/* Add additional source elements for different video formats if needed */}
                </video>
              )}
              {/* Other content */}
            </div>
        );
    }
  

  }
  
export default GreenScreenComponent;