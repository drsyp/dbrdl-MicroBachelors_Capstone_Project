import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div >
        <div style={{display:"flex"}}>
        <img src='/cardealership.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
        <h1>
                Welcome to Best Cars dealership in North America. 
            </h1>
              
           </div>

        </div>
         
      </div>
      
    );
  }
}

export default HomePage;
