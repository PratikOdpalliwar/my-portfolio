
import React, { useRef } from 'react';
import './skills.css';

const Skills = () => {
  const containerRef = useRef(null);

  // const scrollLeft = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollBy({
  //       left: -200, // Adjust this value based on the width of skill-box
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollBy({
  //       left: 200,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <div className="main-container">
      <div className="App1">
        <div className="container1">
          <h1>Skills</h1>
        </div>
        <div className="container2" ref={containerRef}>
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">React Js</div>
          <div className="skill-box">Tailwind CSS</div>
          <div className="skill-box">Bootstrap</div>
          <div className="skill-box">Git</div>
        </div>
    
      </div>
    </div>
  );
};

export default Skills;
