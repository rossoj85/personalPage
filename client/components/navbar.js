import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import ScrollableAnchor, { goToTop, configureAnchors } from 'react-scrollable-anchor';



export default class myNavbar extends Component{
    componentDidMount(){
        // console.log('NAVBAR MOUNTED')
        // console.log(this.props)
        let navbar =  document.getElementById('navbar')
        if(this.props.match.params.project==='rain'){
            navbar.classList.add('navbarColored')
        }
    }
        render(){
            configureAnchors({offset: -60, scrollDuration: 800})
            let navbarColored;
            if(this.props.match.params.project==='rain'){
                navbarColored=true
            }
            
            window.onscroll = function() {
                let navbar = document.getElementById('navbar')
                // console.log('Y OFFSET', window.pageYOffset);
                if ( window.pageYOffset > 160 || navbarColored ) {
                    navbar.classList.add("navbarColored");
                } else {
                    navbar.classList.remove("navbarColored");
                }
            }
            // console.log('NAVBAR PROPS', this.ownProps)
            let isExternalProject=this.props.match.params.project;
            // console.log(isExternalProject)
            
            return(
                <Navbar inverse collapseOnSelect fixedTop className='navbarClear' id='navbar'>
            <Navbar.Header>
                    {isExternalProject ?
                        <LinkContainer to='/'>
                        <a href='#top'>
                        <img className="logo" src ="/photos/logoBlack.jpg" />
                        <h3><span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York</h3>
                        </a>
                        </LinkContainer>
                        :
                        <a href='#top'>
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
                <div>
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

    