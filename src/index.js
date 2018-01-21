import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import './scss/style.scss';
import 'bootstrap-css-only';

import Scroll from './components/utils/Scroll';


class App extends React.Component() {
  render () {
    return (
      <div>
        <main>
          <Scroll/>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
