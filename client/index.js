// import './index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/main';
import { ParallaxProvider } from 'react-scroll-parallax';




ReactDOM.render(
    
    <ParallaxProvider>
        <Router >
            <Main />
        </Router>
        </ParallaxProvider>,
       document.getElementById('mainView')
); 
