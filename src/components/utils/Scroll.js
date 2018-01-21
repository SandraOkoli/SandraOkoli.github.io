import React from 'react';

import scrollToComponent from 'react-scroll-to-component';

import About from '../About';
import Project1 from '../projects/Project1';
import Project2 from '../projects/Project2';
import Project3 from '../projects/Project3';
import Project4 from '../projects/Project4';
import Contact from '../Contact';


class Scroll extends React.Component {

  componentDidMount() {
    scrollToComponent(this.About, { offset: 0, align: 'bottom', duration: 500, ease: 'inExpo'});
  }

  render() {
    return (
      <div className="row">
        <div className="page-banner col-md-12">
          <div className='button_group'>
            <button onClick={() => scrollToComponent(this.About, { offset: 0, align: 'bottom', duration: 500, ease: 'inExpo'})}>About</button>
            <button onClick={() => scrollToComponent(this.Projects, { offset: -200, align: 'middle', duration: 1500, ease: 'inCirc'})}>Projects</button>
            <button onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'middle', duration: 500, ease: 'inExpo'})}>Contact</button>
          </div>
          <section className='about' ref={(section) => {
            this.About = section;
          }}><About/></section>
          <section className='projects' ref={(section) => {
            this.Projects = section;
          }}><Project1/></section>
          <section className='black' ref={(section) => {
            this.Black = section;
          }}><Project2/></section>
          <section className='white' ref={(section) => {
            this.White = section;
          }}><Project3/></section>
          <section className='black' ref={(section) => {
            this.Black = section;
          }}><Project4/></section>
          <section className='contact' ref={(section) => {
            this.Contact = section;
          }}><Contact/></section>
        </div>
      </div>
    );
  }
}


export default Scroll;
