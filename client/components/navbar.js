import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {configureAnchors } from 'react-scrollable-anchor';



export default class myNavbar extends Component{
 
    componentDidMount(){
        let navbar =  document.getElementById('navbar')
        console.log('NAVBAR COMPONTENT MOUNT PROPS',this.props)
        if(this.props.match.params.project==='rain'){
            navbar.classList.add('navbarColored')
        }
    }

    render(){
    
        configureAnchors({offset: -80, scrollDuration: 800})
        let navbarColored;
        if(this.props.match.params.project==='rain'){
                navbarColored = true
        }
            
        //using an arrow function here preserves the this context
        window.onscroll = ()=> {
            // console.log('height', window.innerHeight, 'height divieded', window.innerHeight *.8)
            let navbar = document.getElementById('navbar')
            // console.log('Y OFFSET', window.pageYOffset);
         
            if (window.pageYOffset > 160 || navbarColored ||  this.props && this.props.match.params.project.includes('gol')) {
                navbar.classList.add("navbarColored");
            } else {
                navbar.classList.remove("navbarColored");
            }
            }

            let isExternalProject = this.props.match.params.project;
            
    return (
        <Navbar inverse collapseOnSelect fixedTop className='navbarClear' id='navbar'>
            <Navbar.Header>
                    {isExternalProject ?
                        <LinkContainer to='/'>
                        <a href='#splash'>
                        <img className="logo" src ="/photos/logoBlack.jpg" />
                        <h3><span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York</h3>
                        </a>
                        </LinkContainer>
                        :
                        <a href='#splash'>
                        <img className="logo" src ="/photos/logoBlack.jpg" />
                        <h3><span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York</h3>
                        </a>
                    }
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight className='navContainer'>
                
                {isExternalProject ?
                    <div>
                        <LinkContainer to="/#projects"><a className='abtn'>Projects</a></LinkContainer>
                        <LinkContainer to="/#skillSection"><a className='abtn'>Skills</a></LinkContainer>
                        <LinkContainer to="/#about"><a id='about' className='abtn'>About</a></LinkContainer>
                    </div>
                    :
                    <div id='statefullButtons'>
                        <a className='abtn' id='projects' href='#projects'>Projects</a>
                        <a className='abtn' id='skillSection' href='#skillSection'>Skills</a>
                        <a className='abtn' id='about' href='#about'>About</a>
                </div>
                //IDS ARE COMBINED WITH THE :PSEUDO CLASS TO TARGET THESE BUTTONS AS YOU SCROLL
                }
                </Nav>

            </Navbar.Collapse>
        </Navbar>
            )
        }
    }



                {/*}
                <Navbar style={{width: '100%'}} collapseOnSelect className='navbar-fixed-top'>
                    
                    <Navbar.Header className="title">
                    <Link to ='/'>
                        <img className="logo" src ="/photos/logoBlack.jpg" />
                        <h3><span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York</h3>
                         </Link>
                        <Navbar.Toggle />
                    </Navbar.Header>
                   
            <Navbar.Collapse>
              <Nav className="nav container" pullRight>
              
              <LinkContainer to="/projects"><NavItem><button>Projects</button></NavItem></LinkContainer>
              <LinkContainer to="/about"><NavItem><button>About</button></NavItem></LinkContainer>
              <LinkContainer to="/contact"><NavItem><button>Contact</button></NavItem></LinkContainer>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
            */}

    