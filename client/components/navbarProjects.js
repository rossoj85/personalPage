import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import ScrollableAnchor, { goToTop, configureAnchors } from 'react-scrollable-anchor';



export default class projectNavbar extends Component{
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
                    <LinkContainer to='/'>
                    <a href='#top'>
                    <img className="logo" src ="/photos/logoBlack.jpg" />
                    <h3><span style = {{color:"red"}} >Jason Rosso</span> Fullstack Developer, New York</h3>
                    </a>
                    </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight className='navContainer'>
                    {/*}
                        <LinkContainer to="/projects"><NavItem><button>Projects</button></NavItem></LinkContainer>
                        <LinkContainer to="/about"><NavItem><button>About</button></NavItem></LinkContainer>
                        <LinkContainer to="/contact"><NavItem><button>Contact</button></NavItem></LinkContainer>
                */}
                    
                <LinkContainer to="/#projects"><a className='abtn'>Projects</a></LinkContainer>
                <LinkContainer to="/#skillSection"><a className='abtn'>Skills</a></LinkContainer>
                <LinkContainer to="/#about"><a className='abtn'>About</a></LinkContainer>
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            )
        }
    }