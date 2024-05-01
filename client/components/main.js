import '../stylesheets/index.scss'
import React, { Component } from 'react';
import { Route, Switch, Fade } from 'react-router-dom';
import {RainPage, LandingPage, Navbar, Footer, Contact, Loader, ProjectNavbar, Resume} from './index';
import {Gol} from './index'
import {VRDesert, VRNightScene, VRVangogh, VRVaporwave} from './environments'


export default class Main extends Component{

    componentDidMount(){
        console.log("Main Component mounted") 
    }

    render(){
        console.log('REUME!@!#!@#!@', Resume)
        console.log('process.env.NODE_ENV', process.env.NODE_ENV);
        return(
            <div id="innerRoute">
                <div id='innerRouteMainBody'>
                    <Route exact path='/resume' component={Resume} />
                    <Route exact path='/' component={Navbar} />
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/projects/:project' component={Navbar} projectNavbar={true} foo='bar'/>
                    <Route exact path='/projects/rain' component={RainPage} navbarDark={true}/>
                    <Route exact path='/projects/theDesert' component={VRDesert} isVR={true} />
                    <Route exact path='/projects/nightScene' component={VRNightScene} isVR={true} />
                    <Route exact path='/projects/vaporwave' component={VRVaporwave} isVR={true} />
                    <Route exact path='/projects/vangogh' component={VRVangogh} isVR={true}/>
                    <Route exact path='/projects/gol' component={Gol} />
                    <Route exact path='/contact' component={Contact} />
            </div>
            <Footer />
            </div>
        )
    }
}