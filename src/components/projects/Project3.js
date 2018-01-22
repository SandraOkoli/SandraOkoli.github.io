import React from 'react';

const Project3 = () =>  {
  return (
    <div className="container">
      <h3>GA Yearbook</h3>
      <hr/>
      <div className="row">
        <div className="col-md-6">
          <img className="img-responsive" src="https://image.ibb.co/hsRrYb/yearbook_mac.png"/>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>What did I make?</h3>
            <p>For this project I created a fully RESTful app with authentication. Users were able to login or register and add themselves to the yearbook and edit and delete their profile.</p>
            <h3>What technologies were used?</h3>
            <p>I used BCrypt to create hashed passwords and Express jwt to generate tokens to authenticate users.</p>
            <div className="logos">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-express-original-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
            </div>
            <a href="https://hidden-reaches-31565.herokuapp.com/">Launch Project</a>
            <a href="https://github.com/SandraOkoli/WDI_PROJECT_2">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
