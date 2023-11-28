import React, { useState } from 'react';
import "./navbar.css";

const Navbar = () => {

    const [click, setClick]= useState(false);
    // const [isActive, setIsActive] = useState(false);
    
    const onHandleClick =()=>{
      setClick(!click)
    //   setIsActive(!isActive);
    }
  return (
    <header className="header">
        <div className="logo">
            <span className="first-name">
                P
            </span>
            <span className="second-name">
                ratik
            </span>
        </div>

        <div onClick={onHandleClick} className={click ? "mobile-nav-menu" : "nav" }>
            <ul className='item'>
            <a href="/">Home</a>
            </ul>
            <ul className='item'>
            <a href="/">Skills</a>
            </ul>
            <ul className='item'>
        <a href="/">Projects</a>
        </ul>
        </div>
  
        <div className="button-container">
<button className="btn">
            Lets Connect
        </button>
</div>

        <div className="social-media">
            <div className="github">
            <i class="fa-brands fa-github"></i>
            </div>
            <div className="linkedin">
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="instagram">
            <i class="fa-brands fa-instagram"></i>
            </div>
        </div>

        <div className="hamburger-menu" onClick={onHandleClick}>
<i class={click? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
</div> 


        
    </header>
  )
}

export default Navbar
