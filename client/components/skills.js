import React, { Component } from 'react'

import { Fade, Flip, Flash, Rotate, Zoom, Roll, Wobble, Swing, Tada, Shake, Slide, RubberBand, Reveal, Jump, Jello, LightSpeed } from 'react-reveal';

const Skills = (props) => {
  // console.log('INSIDE SKILLS')
  // console.log(props)
  return (
    
    <section className='skills'>
      <h2 className='skills-title section-title'>Skills</h2>
      <Fade fraction={1} duration={2000}>
      <h3 className='skills__intro'>My core proficiencies are the <span className='node-color'>N</span><span className='express-color'>E</span><span className='react-color'>R</span><span className='psql-color'>D</span>stack.
      <br/>
      But picking up new languages or frameworks isn't a problem.
      </h3>
      </Fade>
      <Zoom bottom cascade duration={2000}>
      <div className='nerd-stack container-fluid'>
        <div className='col-sm-offset-4 col-sm-4'>
          <h3>
            <span className='node-color'>N</span>odeJS
          </h3>
        </div>
        <div className='col-xs-10 col-xs-offset-1'>
          <img src='/photos/tech/nerd-stack-black.png'/>
        </div>
        <div className='col-sm-4 col-sm-offset-1'>
          <h3><span className='express-color'>E</span>xpressJS<br/><br/>
          </h3>
        </div>
        <div className='col-sm-2'>
          <h3><span className='react-color'>R</span>eactJS<br/><br/>
          </h3>
        </div>
        <div className='col-sm-4' style={{marginLeft:'30px'}}>
          <h3>Postgre<span className='psql-color'>SQL<br/> D</span>atabases<br/><br/>
          </h3>
        </div>
      </div>
      </Zoom>
      <Zoom cascade fraction={1} duration={2000}>
      <h3 className='skills-intro'>Some technologies I've worked with...</h3>
      </Zoom>
      <div className='skills container-fluid'>
        <div className='row'>
          <Zoom duration={1800} left cascade>
          <div className='languages col-md-6 col-xl-4 container-fluid'>
            <h2><div className=''>Languages</div>
              <div className='languages-border'/>
            </h2>
            <div className='row skill-row'>
              <div className='col-xs-11 skill-bar-container'>
                <span className='skill-percent-left'>
                  80%
                </span>
                <div className='skill-bar skill-js'>
                  <span className='skill-name'>
                    JavaScript (ES6)
                  </span>
                </div>
              </div>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/javascript.png'/>
              </div>
            </div>
            <div className='row skill-row'>
              <div className='col-xs-11 skill-bar-container'>
                <span className='skill-percent-left'>
                  90%
                </span>
                <div className='skill-bar skill-html'>
                  <span className='skill-name'>
                    HTML
                  </span>
                </div>
              </div>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/html.jpg'/>
              </div>
            </div>
            <div className='row skill-row'>
              <div className='col-xs-11 skill-bar-container'>
                <span className='skill-percent-left'>
                  90%
                </span>
                <div className='skill-bar skill-css'>
                  <span className='skill-name'>
                    CSS/Sass
                  </span>
                </div>
              </div>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/css.jpg'/>
              </div>
            </div>
            <div className='row skill-row'>
              <div className='col-xs-11 skill-bar-container'>
                <span className='skill-percent-left'>
                  60%
                </span>
                <div className='skill-bar skill-sql'>
                  <span className='skill-name'>
                    SQL
                  </span>
                </div>
              </div>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/sql.png'/>
              </div>
            </div>
            <div className='row skill-row'>
              <div className='col-xs-11 skill-bar-container'>
                <span className='skill-percent-left'>
                  50%
                </span>
                <div className='skill-bar skill-rails'>
                  <span className='skill-name'>
                    A-frame
                  </span>
                </div>
              </div>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/Aframe.png'/>
              </div>
            </div>
          </div>
          </Zoom>
          <Zoom duration={1800} right cascade>
          <div className='frameworks col-md-6 col-xl-4 container-fluid'>
            <h2><div className=''>Frameworks & Libraries</div>
            <div className='frameworks-border'/>
            </h2>
            
            <div className='row skill-row'>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/react.png'/>
              </div>
              <div className='col-xs-11 skill-bar-container'>
                <div className='skill-bar skill-react'>
                  <span className='skill-name'>
                    React
                  </span>
                </div>
                <span className='skill-percent-right'>
                  90%
                </span>
              </div>
            </div>
            <div className='row skill-row'>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/redux.png'/>
              </div>
              <div className='col-xs-11 skill-bar-container'>
                <div className='skill-bar skill-redux'>
                  <span className='skill-name'>
                    Redux
                  </span>
                </div>
                <span className='skill-percent-right'>
                  80%
                </span>
              </div>
            </div>
            <div className='row skill-row'>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/express.png'/>
              </div>
              <div className='col-xs-11 skill-bar-container'>
                <div className='skill-bar skill-express'>
                  <span className='skill-name'>
                    Express
                  </span>
                </div>
                <span className='skill-percent-right'>
                  70%
                </span>
              </div>
            </div>
            <div className='row skill-row'>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/sequelize.png'/>
              </div>
              <div className='col-xs-11 skill-bar-container'>
                <div className='skill-bar skill-sequelize'>
                  <span className='skill-name'>
                    Sequelize
                  </span>
                </div>
                <span className='skill-percent-right'>
                  70%
                </span>
              </div>
            </div>
            <div className='row skill-row'>
              <div className='skill-logo col-xs-1'>
                <img src='/photos/tech/jquery.png'/>
              </div>
              <div className='col-xs-11 skill-bar-container'>
                <div className='skill-bar skill-jquery'>
                  <span className='skill-name'>
                    JQuery
                  </span>
                </div>
                <span className='skill-percent-right'>
                  60%
                </span>
              </div>
            </div>
          </div>
          </Zoom>
          {
            // Display next to skill chart if XL screen
          }
          <div className='col-xl-4'>
            <Zoom duration={1800} top cascade>
            <div className='tools col-md-6 col-xl-12 container-fluid'>
              <h3>
                Tools
              </h3>
              <div className='row tool-row'>
                <div className='tool-logo github-color col-xs-6 col-xl-12'>
                  <img src='photos/tech/github-tool.png'/>
                  Git & Github
                </div>
                <div className='tool-logo heroku-color col-xs-6 col-xl-12'>
                  <img src='photos/tech/heroku-logo.png'/>
                  Heroku
                </div>
              </div>
              <div className='row tool-row'>
                <div className='tool-logo chrome-dev-color col-xs-6 col-xl-12'>
                  <img src='/photos/tech/chrome-devtools.png'/>
                  Chrome Devtools
                </div>
                <div className='tool-logo react-dev-color col-xs-6 col-xl-12'>
                  <img src='/photos/tech/react-devtools.svg'/>
                  React Devtools
                </div>
              </div>
              <div className='row tool-row'>
                <div className='tool-logo postman-color col-xs-6 col-xl-12'>
                  <img src='/photos/tech/postman-1.png'/>
                  Postman
                </div>
                <div className='tool-logo webpack-color col-xs-6 col-xl-12'>
                  <img src='/photos/tech/webpack.png'/>
                  Webpack & Babel
                </div>
              </div>
              <div className='row tool-row'>
                <div className='tool-logo electron-color col-xs-6 col-xl-12'>
                  <img src='/photos/tech/electron-logo.png'/>
                  Electron
                </div>
                <div className='tool-logo socketio-color col-xs-6 col-xl-12'>
                  <img src='/photos/tech/socket.png'/>
                  Socket.io
                </div>
              </div>
            </div>
            </Zoom>
            <Zoom duration={1800} top cascade>
            <div className='auxiliary col-md-6 col-xl-12 container-fluid'>
              <h3>
                Talents
              </h3>
              <div className='row auxiliary-row'>
                <h4 className='col-xs-3'>Responsive Design</h4>
                <div className='col-xs-9'>
                  <h1>
                  📲 💻 🖥⌚️
                  </h1>
                </div>
              </div>
              <div className='row auxiliary-row'>
                <h4 className='col-xs-3'>Guitar</h4>
                <div className='col-xs-9'>
                  <h1>
                  🎸 🎸 🎸 🎸
                  </h1>
                </div>
              </div>
              <div className='row auxiliary-row'>
                <h4 className='col-xs-3'>Spanish</h4>
                <div className='col-xs-9'>
                  <h1>
                  🇪🇸 🇪🇸 🇪🇸 🇪🇸
                  </h1>
                </div>
              </div>
            </div>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills