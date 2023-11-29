import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
   <div className="container">
    <div className="first-container">
<p className='para'>Hey I'm</p>

<div className="name">
    <span>Pratik</span> <span> Odpalliwar</span>
    <div>Web Developer</div>
</div>

<div className="intro">
Hello! I'm Pratik, a passionate and self-motivated React Developer eager to kickstart my career in web development. Currently honing my skills by working on diverse projects daily, I'm going build a responsive and dynamic web applications by using React.
</div>
    </div>

    <div className="second-container">
      <div className="img-container">

        
      <img src="./img1.png" className="image" />
      </div>

    </div>
   </div>
  )
}

export default Banner
