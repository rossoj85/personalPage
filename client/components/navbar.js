import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ScrollableAnchor, { goToTop, configureAnchors } from 'react-scrollable-anchor';



export default class myNavbar extends Component{
        render(){
            configureAnchors({offset: -60, scrollDuration: 800})
            
            window.onscroll = function() {
                var navbar = document.getElementById('navbar')
                console.log('Y OFFSET', window.pageYOffset);
                if ( window.pageYOffset > 160 ) {
                    navbar.classList.add("navbarColored");
                } else {
                    navbar.classList.remove("navbarColored");
                }
            }
            console.log('NAVBAR PROPS', this.props)
            return(
                <Navbar inverse collapseOnSelect fixedTop className='navbarClear' id='navbar'>
            <Navbar.Header>
                <a href='#top'>
                <img className="logo" src ="/photos/logoBlack.jpg" />
                <h3><span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York</h3>
                </a>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight className='navContainer'>
                {/*}
                    <LinkContainer to="/projects"><NavItem><button>Projects</button></NavItem></LinkContainer>
                    <LinkContainer to="/about"><NavItem><button>About</button></NavItem></LinkContainer>
                    <LinkContainer to="/contact"><NavItem><button>Contact</button></NavItem></LinkContainer>
            */}
                
                <a className='abtn' href='#projects'>Projects</a>
                <a className='abtn' href='#skillSection'>Skills</a>
                <a className='abtn' href='#about'>About</a>
                
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

    