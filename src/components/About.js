import React from 'react';
import '../components/_About.scss';

class About extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    
    return (
      <div className="about-container" {...props}>
        <div className="code-editor">
          <div className="code-editor__header">
            <div className="code-editor__buttons">
              <div className="code-editor__button code-editor__button--close" />
              <div className="code-editor__button code-editor__button--minimize" />
              <div className="code-editor__button code-editor__button--expand" />
            </div>
            <div className="code-editor__title">about-me.js</div>
            <div className="code-editor__actions">
              <div className="code-editor__action">JavaScript</div>
            </div>
          </div>
          
          <div className="code-editor__window">
            <div className="code-editor__sidebar">
              {Array.from({ length: 20 }).map((_, i) => (
                <div className="code-editor__line-number" key={i}>{i + 1}</div>
              ))}
            </div>
            
            <div className="code-editor__content">
              <Statements statements={this.props.statements} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Statements extends React.PureComponent {
  render() {
    return (
      <div className="code-editor__lines">
        {this.props.statements.map((statement, index) => {
          return <Statement statement={statement} key={index} />;
        })}
        <div className="code-editor__line">
          <span className="code-editor__cursor">&nbsp;</span>
        </div>
      </div>
    );
  }
}

class Statement extends React.PureComponent {
  render() {
    const { statement } = this.props;
    
    // Check if the return value contains HTML tags
    const containsHtml = statement.return.includes('<a');
    
    return (
      <div className="code-editor__line">
        <span className="code-editor__syntax code-editor__syntax--keyword">const </span>
        <span className="code-editor__syntax code-editor__syntax--variable">{statement.input}</span>
        <span className="code-editor__syntax code-editor__syntax--operator"> = </span>
        {containsHtml ? (
          <span className="code-editor__syntax code-editor__syntax--string">
            <span dangerouslySetInnerHTML={{ 
              __html: statement.return.startsWith('"') ? statement.return : `"${statement.return}"` 
            }} />
          </span>
        ) : (
          <span className="code-editor__syntax code-editor__syntax--string">{statement.return}</span>
        )}
        <span className="code-editor__syntax code-editor__syntax--punctuation">;</span>
      </div>
    );
  }
}

export default About;
