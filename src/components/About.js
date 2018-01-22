import React from 'react';

const About = () => {
  return(
    <div className="container">
      <div className="about">
        <div className="row">
          <div className="page-banner col-md-12">
            <img className="img-responsive" src="https://preview.ibb.co/mhA6P6/SO_logo.png"/>
            {/* <h1 className="animated infinite bounce">Hi</h1> */}
            <h1 className="animated fadeInLeftBig">Hi, I'm <span>Sandra Okoli</span></h1>
            <h1 className="animated lightSpeedIn">I am a Full Stack Web Developer</h1>
            <p> I’m a lover of the four Ts, Technology, Travelling and last but not least Turkish Tea. I am a recent graduate of General Assemblys Web Development Immersive Bootcamp who is intrigued by things related to Tech, Music, Films and Style. Looking for a junior role where I can continue learning through collaboration with an exciting team. Enough about me, check out my projects below! </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
