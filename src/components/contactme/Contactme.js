import React from 'react'
import { useState } from 'react';
import "./contactme.css"

const Contactme = () => {
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
   
    const handleSubmit = (e) => {
       e.preventDefault();
 };
    
    return (
<div className="main-container">
           <div className="form-container">
             <form onSubmit={handleSubmit}>
               <div className="form-row">
                 <input
                   type="text"
                   className="form-input"
                   placeholder="First Name"
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}
                 />
                 <input
                   type="text"
                   className="form-input"
                   placeholder="Last Name"
                   value={lastName}
                   onChange={(e) => setLastName(e.target.value)}
                 />
               </div>
               <div className="form-row">
                 <input
                   type="email"
                   className="form-input"
                   placeholder="Email Address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 />
                 <input
                   type="text"
                   className="form-input"
                   placeholder="Phone No."
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                 />
               </div>
               <div className="form-row">
                 <textarea
                   className="form-input"
                   placeholder="Message"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                 />
               </div>
               <button type="submit" className="form-submit">
                 Send
               </button>
             </form>
           </div>
           </div>
        );
       };
       

export default Contactme
