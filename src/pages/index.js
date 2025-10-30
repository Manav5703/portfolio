import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactLinks from '../components/ContactLinks';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ContactForm from '../components/ContactForm';

import projects from '../content/projects';
import statements from '../content/about-me';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="layout">
        {/* Background effects */}
        <div className="bg-blur">
          <div className="bg-blur__circle bg-blur__circle--1" aria-hidden="true" />
          <div className="bg-blur__circle bg-blur__circle--2" aria-hidden="true" />
          <div className="bg-blur__circle bg-blur__circle--3" aria-hidden="true" />
        </div>
        <div className="noise" aria-hidden="true" />
        
        {/* Page progress indicator */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* About Section */}
          <section id="about" className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title" data-animate>About Me</h2>
                <p className="section-subtitle" data-animate data-delay="1">Get to know my background and skills</p>
              </div>
              <About statements={statements} data-animate data-delay="2" />
            </div>
          </section>
          
          {/* Projects Section */}
          <section id="projects" className="section section--alt">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title" data-animate>Projects</h2>
                <p className="section-subtitle" data-animate data-delay="1">Check out some of my recent work</p>
              </div>
              <Projects projects={projects} />
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title" data-animate>Get In Touch</h2>
                <p className="section-subtitle" data-animate data-delay="1">Have a question or want to work together?</p>
              </div>
              <div className="contact-wrapper" data-animate data-delay="2">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    );
  }
}
