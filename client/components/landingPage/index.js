import React, { Component } from 'react';
import {Media} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {default as Matrix} from './matrix';
import P5Wrapper from 'react-p5-wrapper';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import Skills from '../skills';

export default class LandingPage extends Component{
    constructor() {
        super();
        this.state = {
          width:  null,
          height: null
        }
        this.updateDimensions=this.updateDimensions.bind(this)
      }
        componentDidMount(){
            console.log("Landing Page mounted")
            window.addEventListener('resize', this.updateDimensions)
        }

        updateDimensions(){
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight*0.9
            })
            console.log('width - ',this.state.width, 'height -',this.state.height)
        }
        render(){
            console.log("Landing Page Props",this.props.navbar)
            
            // console.log(ScrollableAnchor)
            const Navbar= this.props.navbar
            // console.log(configureAnchors)
            console.log(screen.height)
            return(
            <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false} 
            id="LandingPage">
            
                <ScrollableAnchor id={'top'}><div></div></ScrollableAnchor>
                <div className="jumbotron"></div>
                

                <div className = "border" > </div>
                
                <ScrollableAnchor id={'about'}>
                <div id='bio'>
                    <P5Wrapper id='landingMatrix ' sketch={Matrix} style={{height: '90vh'}} width ={this.state.width} height={this.state.height}/>
                    <div id='textBox'>
                        <h2>The Only Limit To Our Reality Is Imagination...</h2>
                        <p>
                        Hi, my name is Jason. I am a Fullstack Javascript developer, software engineer, former teacher and world-traveler.
                        I first discovered my love for code about a year and a half ago upon returning home from a long stint working abroad 
                        and realized that my passion for studying human language extended to learning computer language as well. <br/>
                        <br/>
                        I spent about six months teaching myself Javascript and then enrolled in Fullstack Academy’s Immersive Software Engineering Program 
                        where my knowledge grew exponentially. My current specialty is building React.js applications in a Node.js environment, but I enjoy 
                        working throughout the stack and am always open to learning with new technologies.  I love what I do because I am constantly improving, 
                        creating amazing things, collaborating with great people and pushing the boundaries of what is possible everyday. 
                         </p>
                        
                    </div>
                </div>
                </ScrollableAnchor>

                <ScrollableAnchor id={'skillSection'}><div></div></ScrollableAnchor>
                <Skills />

            </ReactCSSTransitionGroup>
            )
        }
    }

    {/*}
                <div className="descriptors" >
                
                    <div className="short col-md-7">
                        <Media>
                        <Media.Left>
                            <img width={150} height={150} src="/photos/activeImagination.jpg" alt="Image" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>The Only Limit To Our Reality Is Imagination. . .</Media.Heading>
                            <p>
                            New York based Fullstack Javascript developer who enjoys working with large 
                            datasets and making apps that are elegant, functional, visually striking,
                            and above all fun and easy to use.</p>

                            <Link to='/about' ><p><span style={{color:'red', textAlign: 'right'}}> 
                            More about me.</span></p></Link>
                        </Media.Body>
                        </Media>
                        <hr style={{marginTop:'60px',marginBottom:'20px'}}/>
                    </div>
                    
                    
                    <div className="short col-md-7">
                        <Media>
                        <Media.Body>
                            <Media.Heading>Tools</Media.Heading>
                            <p>
                                <span style={{color:'gray'}}>Back-End:</span> SQL Databases, Sequelize ORM, Node.js, Express, Websockets
                                <br/>
                                <br/>
                                
                                
                                <span style={{color:'gray'}}>Front-End:</span> React.js, Redux, A-Frame, P5 processing ,Paper.js, HTML, CSS
                            </p>
                        </Media.Body>
                        <Media.Right>
                            <img width={150} height={150} src="/photos/toolsinv.png" />
                        </Media.Right>
                        </Media>
                        <hr style={{marginTop:'60px',marginBottom:'20px'}}/>
                    </div>


                  <div className="short col-md-7">
                  <Media>
                  <Media.Left>
                      <img width={150} height={150} src="/photos/project4.gif"  />
                  </Media.Left>
                  <Media.Body>
                      <Media.Heading>Projects</Media.Heading>
                      <p>
                        <ul>
                            <li>Applications</li>
                            <li>Sites</li>
                            <li>Visual Arts</li>
                            <li>Games</li>
                        </ul>
                        <Link to='/projects'> <span style={{color:'red', float: 'right'}}>View Projects.</span>
                        </Link>
                      </p>
                      
                  </Media.Body>
                  </Media>
                  <hr style={{marginTop:'60px',marginBottom:'20px'}}/>
            
              </div>
                </div>
            */}