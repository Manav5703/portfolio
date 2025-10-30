import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/_Projects.scss';

// Project tag component
class ProjectTag extends React.PureComponent {
  render() {
    return <span className="project-tag">{this.props.skill}</span>;
  }
}

// Project tags list component
class ProjectTags extends React.PureComponent {
  render() {
    return (
      <div className="project-tags">
        {this.props.skills.map((skill, index) => (
          <ProjectTag skill={skill} key={index} />
        ))}
      </div>
    );
  }
}

// Project links component
class ProjectLinks extends React.PureComponent {
  render() {
    const { github, preview } = this.props.links;
    return (
      <div className="project-links">
        <a
          href={preview}
          rel="noopener"
          target="_blank"
          className="project-link project-link--demo"
          aria-label="View live demo"
        >
          <FontAwesomeIcon icon="external-link-alt" />
          <span>Demo</span>
        </a>
        
        {github === 'contact' ? (
          <span className="project-link project-link--contact">
            <FontAwesomeIcon icon="envelope" />
            <span>Contact</span>
          </span>
        ) : (
          <a
            href={github}
            rel="noopener"
            target="_blank"
            className="project-link project-link--code"
            aria-label="View source code"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span>Code</span>
          </a>
        )}
      </div>
    );
  }
}

class ProjectCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      loaded: false,
      hovered: false 
    };
  }

  handleImageLoad = () => this.setState({ loaded: true });
  
  handleMouseEnter = () => this.setState({ hovered: true });
  handleMouseLeave = () => this.setState({ hovered: false });

  render() {
    const { image, title, description, skills, links, ...rest } = this.props;
    const { loaded, hovered } = this.state;

    return (
      <article 
        className={`project ${loaded ? 'is-loaded' : ''} ${hovered ? 'is-hovered' : ''}`} 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...rest}
      >
        <div className="project-inner">
          <header className="project-header">
            <div className="project-image-wrapper">
              <img 
                className="project-image" 
                src={image} 
                onLoad={this.handleImageLoad} 
                alt={`Screenshot of ${title}`} 
              />
              <div className="project-image-overlay" />
            </div>
          </header>
          
          <div className="project-body">
            <h3 className="project-title">{title}</h3>
            <div className="project-description" dangerouslySetInnerHTML={{ __html: description }} />
            
            <ProjectTags skills={skills} />
          </div>
          
          <footer className="project-footer">
            <ProjectLinks links={links} />
          </footer>
        </div>
      </article>
    );
  }
}

class Projects extends React.PureComponent {
  render() {
    const { projects } = this.props;
    return (
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <ProjectCard
              title={proj.title}
              description={proj.description}
              skills={proj.skills}
              links={proj.links}
              image={proj.image}
              key={proj.title}
              data-animate
              data-delay={index + 1}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
