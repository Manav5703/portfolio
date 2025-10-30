import React from 'react';
import { Scrollchor } from 'react-scrollchor';
import '../components/_Hero.scss';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
    this.heroRef = React.createRef();
    this.state = {
      typedText: '',
      currentIndex: 0,
      roles: ['Software Developer', 'CS Student', 'Problem Solver']
    };
  }

  componentDidMount() {
    // Start typing animation
    this.startTyping();
    
    // Setup parallax effect
    this.setupParallax();
  }
  
  componentWillUnmount() {
    if (this._cleanupParallax) this._cleanupParallax();
    if (this._typingTimeout) clearTimeout(this._typingTimeout);
  }
  
  setupParallax = () => {
    const el = this.heroRef.current;
    if (!el) return;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage of screen
      const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      // Apply parallax effect to elements
      const elements = el.querySelectorAll('.parallax-element');
      elements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 1;
        const moveX = x * speed * -10;
        const moveY = y * speed * -10;
        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    this._cleanupParallax = () => document.removeEventListener('mousemove', handleMouseMove);
  }
  
  startTyping = () => {
    const { roles, currentIndex, typedText } = this.state;
    const currentRole = roles[currentIndex];
    
    if (typedText.length < currentRole.length) {
      // Still typing current role
      this._typingTimeout = setTimeout(() => {
        this.setState({ 
          typedText: currentRole.substring(0, typedText.length + 1) 
        }, this.startTyping);
      }, 100);
    } else {
      // Pause at the end of the role
      this._typingTimeout = setTimeout(() => {
        // Start erasing
        this.startErasing();
      }, 2000);
    }
  }
  
  startErasing = () => {
    const { typedText } = this.state;
    
    if (typedText.length > 0) {
      // Still erasing
      this._typingTimeout = setTimeout(() => {
        this.setState({ 
          typedText: typedText.substring(0, typedText.length - 1) 
        }, this.startErasing);
      }, 50);
    } else {
      // Move to next role
      this._typingTimeout = setTimeout(() => {
        this.setState(prevState => ({
          currentIndex: (prevState.currentIndex + 1) % prevState.roles.length
        }), this.startTyping);
      }, 500);
    }
  }

  render() {
    const { typedText } = this.state;
    
    return (
      <section id="home" className="hero-section" ref={this.heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-greeting">Hello, I'm</span>
              <h1 className="hero-name">Manav Patel<span className="text-gradient">.</span></h1>
              
              <div className="hero-role">
                <span className="hero-role-prefix">I'm a </span>
                <span className="hero-role-typed">{typedText}</span>
                <span className="hero-role-cursor">|</span>
              </div>
              
              <p className="hero-description">
                4th year Computer Science student at Acadia University.
                Passionate about building elegant solutions to complex problems.
                Currently looking for internship opportunities.
              </p>
              
              {/* Buttons removed as requested */}
            </div>
            
            <div className="hero-visual">
              <div className="hero-shape hero-shape--1 parallax-element" data-speed="1.5" aria-hidden="true"></div>
              <div className="hero-shape hero-shape--2 parallax-element" data-speed="2" aria-hidden="true"></div>
              <div className="hero-shape hero-shape--3 parallax-element" data-speed="1" aria-hidden="true"></div>
              <div className="hero-illustration" aria-hidden="true"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator removed as requested */}
      </section>
    );
  }
}

export default Hero;
