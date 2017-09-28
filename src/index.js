import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./index.less";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {asyncComponent} from "./aync";
import HomePage from "./component/homePage/homePage.js";
const Broadcast = asyncComponent(()=>import("./component/broadcast/broadcast"));
const PublicBroadcast = asyncComponent(()=>import("./component/broadcast/publicBroadcast"));
const Book = asyncComponent(()=>import("./component/book/book"));
const Register = asyncComponent(()=>import("./component/register/register"));
const MoreDetail = asyncComponent(()=>import ("./component/movie/moreDetail"));
const Type = asyncComponent(()=>import("./component/movie/type"));
const MoreComment = asyncComponent(()=>import("./component/comment/moreComment.js"));
const Login = asyncComponent(()=>import("./component/register/login"));
const IsDone = asyncComponent(()=>import("./component/comment/isDone"));
const Wanted = asyncComponent(()=>import("./component/comment/wanted"));
const Mine = asyncComponent(()=>import("./component/register/mine"));
const Search = asyncComponent(()=>import("./component/search/search"));
const Result = asyncComponent(()=>import("./component/search/result"))
ReactDOM.render(
    // 对于网页项目，存在browserRouter和HashRouter两种组件 当存在服务区来管理动态请求时  则使用browserRouter 当为静态网站是 则hashRouter
    // path为/broadcast时  /broadcast和/broadcast/publicBroadcast均会匹配 这时有两种方法  第一种是将path为/broadcast/publicBroadcast的Route放在前面 这样就不会匹配到/broadcast  第二种就是在/broadcast 中添加exact 这样就/broadcast就不会匹配到/broadcast/publicBroadcast了
    <BrowserRouter>
       <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/broadcast" component={Broadcast} exact></Route>
            <Route path="/broadcast/publicBroadcast" component={PublicBroadcast}></Route> 
            <Route path="/book" component={Book}></Route>    
            <Route path="/moreDetail/:id" component={MoreDetail}></Route>
            <Route path="/movie" component={HomePage}></Route>
            <Route path="/type/:id" component={Type}></Route>
            <Route path="/moreComment/:id" component={MoreComment}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/isDone/:title" component={IsDone}></Route>
            <Route path="/wanted/:title/:type" component={Wanted}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/result/:search" component={Result}></Route>
       </Switch>
   </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
