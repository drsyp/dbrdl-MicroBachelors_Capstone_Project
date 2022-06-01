import './bootstrap.min.css';
import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img src='/img02.jpg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
            <h1>
                Welcome to Best Cars dealership, home to the best cars in North America. 
            </h1><br/>
            <h2>We sell domestic and imported cars at reasonable prices.</h2>
           </div>

        </div>
        
      </div>
    );
  }
}

export default AboutUs;
