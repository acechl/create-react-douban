import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter,Route,Switch} from "react-router-dom";
import {asyncComponent} from "./aync";
import HomePage from "./component/homePage/homePage.js";
const Broadcast = asyncComponent(()=>import("./component/broadcast/broadcast"));
const PublicBroadcast = asyncComponent(()=>import("./component/broadcast/publicBroadcast"));
const Book = asyncComponent(()=>import("./component/book/book"));
// import HomePage from "./component/homePage/homePage";
// import Movie from "./component/movie/movie";
// import Book from "./component/book/book";
// import Broadcast from "./component/broadcast/broadcast";
// import Search from "./component/search/search";
// import MoreChoose from "./component/moreChoose/moreChoose";
// import MoreDetail from "./component/moreDetail/moreDetail"
// import PublicBroadcast from "./component/broadcast/publicBroadcast"
ReactDOM.render(
    <HashRouter>
       <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/broadcast/publicBroadcast" component={PublicBroadcast}></Route> 
            <Route path="/broadcast" component={Broadcast}></Route>
            <Route path="/book" component={Book}></Route>          
                {/*<Route exact path="/">
                getComponent = {
                    (nextState,callback)=>{
                        require.ensure([],(require)=>{
                            callback(null,require("./component/homePage/homePage").default)
                        },"homePage")
                    }
                }
            </Route>
            <Route path="/movie">
                getComponent = {
                    (nextState,callback)=>{
                        require.ensure([],(require)=>{
                            callback(null,require("./component/movie/movie").default)
                        },"movie")
                    }
                }
            </Route>
            <Route path="/book">
                getComponent = {
                    (nextState,callback)=>{
                        require.ensure([],(require)=>{
                            callback(null,require("./component/book/book").default)
                        },"book")
                    }
                }
            </Route>
            <Route path="/broadcast">
                getComponent = {
                    (nextState,callback)=>{
                        require.ensure([],(require)=>{
                            callback(null,require("./component/broadcast/broadcast").default)
                        },"broadcast")
                    }
                }
                <Route path="/publicBroadcast">
                    getComponent = {
                        (nextState,callback)=>{
                            require.ensure([],(require)=>{
                                callback(null,require("./component/broadcast/publicBroadcast").default)
                            },"publicBroadcast")
                        }
                    }
                </Route>
            </Route>
            <Route path="/search">
                getComponent = {
                    (nextState,callback)=>{
                        require.ensure([],(require)=>{
                            callback(null,require("./component/search/search").default)
                        },"search")
                    }
                }
            </Route>
            <Route path="/moreChoose">
                getComponent = {
                    (nextState,callback)=>{
                        require.ensure([],(require)=>{
                            callback(null,require("./component/moreChoose/moreChoose").default)
                        },"moreChoose")
                    }
                }
            </Route>
            <Route path="/moreDetail">
                getComponent= {
                    (nextState,callback) =>{
                        require.ensure([],(require)=>{
                            callback(null,require("./component/moreDetail/moreDetail").default)
                        },"moreDetail")
                    }
                }
            </Route>*/}
       </Switch>
   </HashRouter>,
document.getElementById('root'));
registerServiceWorker();
