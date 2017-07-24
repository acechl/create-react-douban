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
import MoreChoose from "./component/moreChoose/moreChoose";
import MoreDetail from "./component/moreDetail/moreDetail"
ReactDOM.render(
    <HashRouter>
       <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/movie" component={Movie}></Route>
            <Route path="/book" component={Book}></Route>
            <Route path="/broadcast" component={Broadcast}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/moreChoose" component={MoreChoose}></Route>
            <Route path="/moreDetail" component={MoreDetail}></Route>
       </Switch>
   </HashRouter>,
document.getElementById('root'));
registerServiceWorker();
