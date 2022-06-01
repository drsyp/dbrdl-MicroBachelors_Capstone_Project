import './bootstrap.min.css';
import React from 'react';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img src='/img01.jpg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
        <pre>    
        <h1>General Contact Information</h1><br />
        Phone
            202-606-1800*
        Mailing Address
            U.S. Office of Personnel Management
            1900 E Street, NW
            Washington, DC 20415-1000
        </pre>
            
           </div>

        </div>
        
      </div>
    );
  }
}

export default ContactUs;
