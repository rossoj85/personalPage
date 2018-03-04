import React from 'react';


  export default (props) => {
    
    return (
      <footer className='footer'>
      <div className='footer-wrapper'>
        <h2 className='footer-title'>FOLLOW JASON</h2>
        <ul className='nav-footer'>
          <li className='nav-link-footer nav-link-github'>
            <a href='https://github.com/rossoj85' target='_blank'>
              <img src='/logos/github-black.svg' height='24px' className='default-link'/>
              <img src='/logos/github-white.svg' height='24px' className='hover-link'/>
            </a>
          </li>
          <li className='nav-link-footer nav-link-mail'>
          <a href='mailto:jasonrosso@gmail.com' target='_blank'>
          <img src='/logos/letter.png' height='24px' className='default-link'/>
          <img src='/logos/letter.png' height='24px' className='hover-link' />
        </a>
          </li>
          <li className='nav-link-footer nav-link-linkedin'>
            <a href='https://linkedin.com/in/jason-rosso' target='_blank'>
              <img src='/logos/linkedin-black.svg' height='24px' className='default-link'/>
              <img src='/logos/linkedin-white.svg' height='24px' className='hover-link' />
            </a>
          </li>
        </ul>
        <h2 id='deignedLine'>Designed & Developed by Jason Rosso using React.js</h2>

        {/*<br/>
        <h5>© Jason Rosso 2017</h5>
        <br/>*/}

        <a href='#top' className='anchor-logo'>
          <img className='footlogo'
            src= '/photos/logoBlack.jpg'
            alt='anchor'
          />
          
        </a>
      </div>
    </footer>
      );
  }