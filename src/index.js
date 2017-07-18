import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter,Route,Switch} from "react-router-dom";
import HomePage from "./component/homePage/homePage";
import Movie from "./component/movie/movie";
import Book from "./component/book/book";
import Broadcast from "./component/broadcast/broadcast";
import Search from "./component/search/search";
ReactDOM.render(
    <HashRouter>
       <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/movie" component={Movie}></Route>
            <Route path="/book" component={Book}></Route>
            <Route path="/broadcast" component={Broadcast}></Route>
            <Route path="/search" component={Search}></Route>
       </Switch>
   </HashRouter>,
document.getElementById('root'));
registerServiceWorker();
