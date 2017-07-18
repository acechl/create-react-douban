import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter,Route,Switch} from "react-router-dom";
import HomePage from "./index/index1";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2"
ReactDOM.render(
    <HashRouter>
       <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/page1" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
       </Switch>
   </HashRouter>,
document.getElementById('root'));
registerServiceWorker();
