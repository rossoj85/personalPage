import React from 'react';
import {Tabs, Tab, Media} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


  export default (props) => {
    
    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={true}
      transitionLeave={true} 
      >
        <div style={{height: '750px'}}>
        <div className='mediaBodyBackground'>
        <h1 style={{color:'#337ab7',}} >About</h1>
          
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Me">
              <Media >
                <Media.Left>
                  <img width={64} height={64} src="/photos/logoBlack.jpg" alt="Image" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading style={{fontSize:'24px'}}>About Me</Media.Heading>
                  <div className='aboutPText'>
                  <p style={{width: '40%'}}>
                  A native New Yorker, and newcomer to the field of development, 
                  I discovered my passion for programming after returning home from several years working abroad. 
                  After a few months of teaching myself Javascript, HTML and CSS, I decided to take the leap and attend a coding bootcamp. 
                  I am a recent graduate of Fullstack Academy in New York, 
                  and am currently searching for my first full-time development position. 
                  </p>
                  <p style={{width: '40%'}}>
                  Before going to Fullstack, I worked as an English teacher in NYC public schools, Japan and Korea,
                   as well as an Educational Consultant in Colombia, a Legislative Assistant for the City Council President of Yonkers, NY 
                   and on the Metro Desk at the Boston Globe. 
                  </p>
                  <p style={{width: '40%'}}>
                  In my free time I enjoy learning languages, travel biking, and playing guitar. 
                  </p>
                  </div>
                </Media.Body>
            </Media>
              </Tab>


              <Tab eventKey={2} title="This Site">
                <Media >
                  <Media.Left>
                    <img width={64} height={64} src="/photos/logoBlack.jpg" alt="Image" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>This Site</Media.Heading>
                    <div className='aboutPText'>
                      <p style={{width: '40%'}}>
                      This site was one of my first projects after bootcamp, 
                      built to showcase my work. This site was built using a React front-end, and 
                      and node.js/Express backend. 
                      Please feel free to check out the source code below. 
                      </p>
                    </div>

                    <img src='/photos/github-white.png' style={{height:'18px',
                    width:'18px',
                    display:'inline-block',
                    marginBottom: '3px',
                    marginRight: '1px'}} />
                    <a id="modalA"style={{display:'inline-block', fontSize:'16px', marginTop: '30px'}}>
                    https://github.com/rossoj85/personalPage</a>

                    </Media.Body>
                </Media>
              </Tab>
            </Tabs>
            </div>
        </div>
      </ReactCSSTransitionGroup>
      );
  }