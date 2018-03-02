import React from 'react';

  export default (props) => {
    
    return (

        <div id="contact">
            <h2 style={{color: 'red'}}>Contact</h2>

            <div style={{margin: 'auto',textAlign: 'center'}}>
            <a href='https://github.com/rossoj85'><img className='aboutImg' src='/photos/github-white.png' /></a>
            <a href='mailto:jasonrosso@gmail.com'><img className='aboutImg2' src='/photos/gmail.png' /></a>
            <a href='https://linkedin.com/in/jason-rosso'><img className='aboutImg2' src='/photos/linkedin.png' /></a>
            </div>
            
        </div>
        
      );
  }