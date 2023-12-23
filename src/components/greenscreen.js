import React from 'react';
import GreenScreenVid from '../img/GSFffm.webm'

function GreenScreenComponent() {
    // Check if the user is using Safari
    const isUsingSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isUsingSafari === true) {
      return (
        
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
              You're currently using Safari; some Features may not work on this browser as intended.
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
    );

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