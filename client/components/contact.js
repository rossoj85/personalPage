import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

  export default (props) => {
    
    return (
        <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false} 
        >
        <div id="contact">
            <h2 style={{color: 'red'}}>Contact</h2>

            <div style={{margin: 'auto',textAlign: 'center'}}>
            <a href='https://github.com/rossoj85'><img className='aboutImg' src='/photos/github-white.png' /></a>
            <a href='mailto:jasonrosso@gmail.com'><img className='aboutImg2' src='/photos/gmail.png' /></a>
            <a href='https://linkedin.com/in/jason-rosso'><img className='aboutImg2' src='/photos/linkedin.png' /></a>
            </div>
        </div>
        </ReactCSSTransitionGroup>
      );
  }