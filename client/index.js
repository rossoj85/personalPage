// import './index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import {HashRouter as Router} from 'react-router-dom';
import Main from './components/main';





ReactDOM.render(
        <Router >
            <Main />
        </Router>,
       document.getElementById('mainView')
); 
