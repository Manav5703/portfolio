import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/_Footer.scss';

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">Manav<span className="text-gradient">.</span></span>
              <p className="footer-tagline">Software Developer & CS Student</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-links-group">
                <h4 className="footer-heading">Navigation</h4>
                <ul className="footer-nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-links-group">
                <h4 className="footer-heading">Connect</h4>
                <ul className="footer-social">
                  <li>
                    <a href="https://github.com/Manav5703" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/manavpatel5703" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="mailto:manavpatel5703@gmail.com">
                      <FontAwesomeIcon icon="envelope" /> Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              © {new Date().getFullYear()} Manav Patel. All rights reserved.
            </div>
            <div className="footer-note">
              Built with <span className="heart">♥</span> using React & Gatsby
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
