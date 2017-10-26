import '../index.scss'
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {RainPage, LandingPage, Navbar} from './index';


export default class Main extends Component{

    componentDidMount(){
        console.log("Main Component mounted")
        console.log(LandingPage);
       
    }
    render(){
        return(
            <div id="mainView">
            <main>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route exact path='/rain' component={RainPage} />
            </main>
            </div>
        )
    }
}