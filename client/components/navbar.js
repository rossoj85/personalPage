import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class myNavbar extends Component{
    
      
        render(){
            console.log(this)
            return(
           
                <Navbar style={{width: '100%'}} collapseOnSelect>
                    
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
          
          
            )
        }
    }