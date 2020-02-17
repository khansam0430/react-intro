import React, { Component } from 'react';
import panda from './panda.jpg';
class Footer extends Component {
    render() {
      return (
        <div>
          <footer>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img src={panda} className="pandaPic" alt="panda" />
            <p>
                <code>Enjoy this pic of a sleeping Panda</code> 
                <p>&copy; 2020</p>
            </p>
            
          </footer>
        </div>
      );
    }
  }
  
  export default Footer;