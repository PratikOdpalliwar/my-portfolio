import React from 'react'
import "./projects.css"

const Projects = () => {
  return (
    <div className="projects">
        <div className="cont1">
<h1>Projects</h1>
        </div>
        <div className="cont2">


        {/* <div className="project-box">
        mini Ecommerce website
            </div>
            <div className="project-box">
                Responsive Website
            </div>
            <div className="project-box">
            Weather App
            </div> */}

<div className="box1">
  <img className="image1" src="./image2.png"/>
  <div className="text-container1">
  mini Ecommerce website
  </div>
  </div>

  <div className="box1">
  <img className="image1" src="./image3.png"/>
  <div className="text-container1">
  Responsive Website
  </div>
  </div>

  <div className="box1">
  <img className="image1" src="./image1.webp"/>
  <div className="text-container1">
  Weather App
  </div>
  </div>
        </div>
    </div>
  )
}

export default Projects