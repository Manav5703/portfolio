import React from 'react';
import { Scrollchor } from 'react-scrollchor';
import '../components/_Navbar.scss';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      menuOpen: false, 
      theme: 'dark', // Default to dark theme
      activeSection: 'home',
      scrolled: false
    };
  }

  componentDidMount() {
    // Initialize theme from document attribute if present
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    this.setState({ theme: current });
    
    // Add scroll event listener to detect when navbar should change style
    window.addEventListener('scroll', this.handleScroll);
    
    // Set up intersection observer to detect active section
    this.setupIntersectionObserver();
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    
    // Clean up observer if it exists
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  
  setupIntersectionObserver = () => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            this.setState({ activeSection: id });
          }
        }
      });
    }, options);
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id], div[id="projects"], div[id="contact"]');
    sections.forEach(section => {
      this.observer.observe(section);
    });
  }

  handleScroll = () => {
    const scrolled = window.scrollY > 20;
    if (this.state.scrolled !== scrolled) {
      this.setState({ scrolled });
    }
  }

  toggleMenu = () => this.setState(prev => ({ menuOpen: !prev.menuOpen }));

  toggleTheme = () => {
    const next = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme: next });
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch {}
  }
  
  closeMenu = () => {
    this.setState({ menuOpen: false });
  }

  render() {
    const { menuOpen, theme, activeSection, scrolled } = this.state;
    
    return (
      <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <Scrollchor to="#home">Manav<span className="text-gradient">.</span></Scrollchor>
            </div>
            
            <button 
              className={`navbar-toggle ${menuOpen ? 'is-active' : ''}`} 
              onClick={this.toggleMenu} 
              aria-label="Toggle menu" 
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
            
            <nav className={`navbar-menu ${menuOpen ? 'is-open' : ''}`}>
              <ul className="navbar-nav">
                <li className={activeSection === 'home' ? 'active' : ''}>
                  <Scrollchor to="#home" onClick={this.closeMenu}>Home</Scrollchor>
                </li>
                <li className={activeSection === 'about' ? 'active' : ''}>
                  <Scrollchor to="#about" onClick={this.closeMenu}>About</Scrollchor>
                </li>
                <li className={activeSection === 'projects' ? 'active' : ''}>
                  <Scrollchor to="#projects" onClick={this.closeMenu}>Projects</Scrollchor>
                </li>
                <li className={activeSection === 'contact' ? 'active' : ''}>
                  <Scrollchor to="#contact" onClick={this.closeMenu}>Contact</Scrollchor>
                </li>
              </ul>
              
              <button 
                className={`theme-toggle ${theme}`} 
                onClick={this.toggleTheme} 
                aria-label="Toggle theme"
              >
                <span className="theme-toggle-track">
                  <span className="theme-toggle-icon theme-toggle-icon--sun">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </span>
                  <span className="theme-toggle-icon theme-toggle-icon--moon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </span>
                </span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
