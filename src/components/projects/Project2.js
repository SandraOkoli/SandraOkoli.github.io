import React from 'react';

const Project2 = () =>  {
  return (
    <div className="container">
      <h3>Out?</h3>
      <hr/>
      <div className="row">
        <div className="col-md-6">
          <img className="img-responsive" src="https://image.ibb.co/mQrD1w/Out_mac.png"/>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>What did I make?</h3>
            <p>For our group project we decided to build an application that plans your night out.</p>
            <h3>What technologies were used?</h3>
            <p>This was a team project that involved using Github collaboratively to produce a RESTful MEAN stack app. We utilised Google Maps API and Google Places to enable users to search for a location when creating an events. I was tasked with testing (using Mocha, Chai and Istanbul), implementing the comments functionality, created two of the RESTful routes and styled the index and show page.</p>
            <div className="logos">
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-express-original-wordmark"></i>
              <i className="devicon-angularjs-plain-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-gulp-plain"></i>
              <i className="devicon-bower-plain-wordmark"></i>
            </div>
            <a href="https://out-sandra.herokuapp.com/">Launch Project</a>
            <a href="https://github.com/SandraOkoli/WDI_GROUP_PROJECT">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
