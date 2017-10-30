import React, { Component } from 'react';
import {Media} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class LandingPage extends Component{
    
        componentDidMount(){
            console.log("Landing Page mounted")
          
           
        }
        render(){
            console.log("Landinf Page Props",this.props.navbar)
            const Navbar= this.props.navbar
            return(
            <div id="LandingPage">
                <Navbar />
                <div className="jumbotron" >
                    
                </div>

                <div className = "border">
                </div>

                <div className="descriptors">
                
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
                            Click here to learn more about me.</span></p></Link>
                        </Media.Body>
                        </Media>
                        <hr style={{marginTop:'60px',marginBottom:'20px'}}/>
                    </div>
                    
                    
                    <div className="short col-md-7">
                        <Media>
                        <Media.Body>
                            <Media.Heading>Tools</Media.Heading>
                            <p>
                                <span style={{color:'red'}}>Back-End:</span> SQL Databases, Sequelize ORM, Node.js, Express, Websockets
                                <br/>
                                <br/>
                                
                                
                                <span style={{color:'red'}}>Front-End:</span> React.js, Redux, A-Frame, P5 processing ,Paper.js, HTML, CSS
                            </p>
                        </Media.Body>
                        <Media.Right>
                            <img width={150} height={150} src="/photos/tools.png" style={{background:'white'}} />
                        </Media.Right>
                        </Media>
                        <hr style={{marginTop:'60px',marginBottom:'20px'}}/>
                    </div>


                  <div className="short col-md-7">
                  <Media>
                  <Media.Left>
                      <img width={150} height={150} src="/photos/project4.png" style={{background:'white'}} />
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
                        <Link to='/projects'> <span style={{color:'red', float: 'right'}}> Click to View Projects.</span>
                        </Link>
                      </p>
                      
                  </Media.Body>
                  </Media>
                  <hr style={{marginTop:'60px',marginBottom:'20px'}}/>
              </div>
                </div>
            </div>
            )
        }
    }