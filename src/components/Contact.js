import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1>Say Hello.</h1>
      <div className="row">
        <div className="page-banner col-md-12">
          <ul className="center">
            <li><a href="mailto:sandraokoli.dev@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
            <li><a href="https://github.com/SandraOkoli"><i className="fa fa-github" aria-hidden="true"></i>
            </a></li>
            <li><a href="https://www.linkedin.com/in/sandra-okoli/"><i className="fa fa-linkedin" aria-hidden="true"></i>
            </a></li>
            <li><a href="https://twitter.com/Introducing_SO"><i className="fa fa-twitter" aria-hidden="true"></i>
            </a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
