import React from 'react';

const Project4 = () =>  {
  return (
    <div className="container">
      <h3>Slap a Doll</h3>
      <hr/>
      <div className="row">
        <div className="col-md-6">
          <img className="img-responsive" src="https://image.ibb.co/mxpmrm/slap_a_doll_mac.png" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>What did I make?</h3>
            <p>For my first project of the Web Development Immersive course with General Assembly, I built a game using Javascript, jQuery, HTML5, CSS3. Slap a Doll, featuring the Kardashians is a humorous take on the popular arcade game Whac-A-Mole invented in the 1970s by Aaron Fechter.</p>
            <h3>What technologies were used?</h3>
            <p>Using jQuery and DOM manipulation, players can choose between three Kardashians to feature in the game. Using mouse clicks, the user must slap a Kardashian as they appear before the time runs out. Each time a Kardashian is successfully hit, the score is incremented by 10 points. If a user fails to click on time and the score is greater than 0 the score is decremented by 5 points. The game gets faster each time the user goes up a level.</p>
            <div className="logos">
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-jquery-plain-wordmark"></i>
              <i className="devicon-php-plain"></i>
            </div>
            <a href="https://enigmatic-woodland-29313.herokuapp.com/">Launch Project</a>
            <a href="https://github.com/SandraOkoli/WDI_PROJECT_1">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;
