import React, {Component} from "react";
import {Link} from "react-router-dom";
import cs from "classnames"
class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type:[{type:"电影",name:"影院热映",color: "rgb(35, 132, 232)"},{type:"电视",name:"正在热播",color:"rgb(122, 106, 219)"},{type:"图书",name:"畅销排行",color:"rgb(159, 120, 96)"},{type:"同城",name:"周末活动",color:"rgb(230, 70, 126)"},{type:"小组",name:"志趣相投",color:"rgb(42, 184, 204)"},{type:"音乐",name:"新碟榜",color:"rgb(244, 143, 46)"},{type:"阅读",name:"电子书",color:"rgb(159, 120, 96)"},{type:"游戏",name:"虚拟世界",color:"rgb(87, 116, 197)"},{type:"应用",name:"玩手机",color:"rgb(89, 108, 221)"},{type:"东西",name:"心爱之物",color:"rgb(225, 100, 77)"},{type:"FM",name:"红心歌单",color:"rgb(64, 207, 169)"},{type:"市集",name:"购买原创",color:"rgb(66, 189, 86)"}],
            username: "",
            show: false,
            search: "",
            focus: false,
            autoFocus: "",
            nickName:""
        }
    }
    render () {
        let users = null;
        let logins = null;
        let show = null;
        if(this.state.username){
            users = <li><Link to="/mine">{this.state.nickName}</Link></li>
            logins = <li><a href="javascript:;" onClick={this.out.bind(this)}>退出豆瓣</a></li>
        }else {
            users = <li><Link to="/login">注册豆瓣</Link></li>
            logins = <li><Link to="/register">登录豆瓣</Link></li>
        }
        if(this.state.show){
            show = <span onClick={this.clear.bind(this)} className="clear" >x</span>
        }else {
            show = null;
        }
        return (
            <div className="search">
                 <div className="headers">
                     <Link to="/movie" className="close">关闭</Link>
                     <div>
                        <input type="text" className={cs({
                            "download":true,
                            "focus":this.state.focus,
                            "blur": !this.state.focus
                        })} onChange={this.input.bind(this)} value = {this.state.search} onFocus ={this.focus.bind(this)} onBlur = {this.blur.bind(this)} autoFocus={this.state.autoFocus}/>
                        {show}
                     </div>
                     <Link to={"/result/"+this.state.search}>确认</Link>
                 </div>
                 <div className="type">
                     <ul>
                         {
                           this.state.type.map((item,index)=>{
                                 return (
                                     <li key={index}>
                                     <a href="javascript:;">
                                         <span style={{color:item.color}}>{item.type}</span>
                                         <span>{item.name}</span>
                                     </a>
                                 </li>
                                 )
                             })
                         }
                     </ul>
                 </div>
                 <div className="bottoms">
                     <ul>
                         {users}
                         {logins}
                         <li><a href="javascript:;">使用桌面版</a></li>
                         <li><a href="javascript:;">使用豆瓣App</a></li>
                     </ul>
                 </div>
             </div>
        )
    }
     componentWillMount () {
         this.setState({
         username: localStorage.getItem("user"),
         nickName: localStorage.getItem("nick")
         })
    }
    input (event) {
        if(event.target.value.length > 0){
            this.setState({
                show: true,
                search: event.target.value
            })
        }else {
            this.setState({
                show:false,
                search: event.target.value
            })
        }
    }
    clear () {
        this.setState({
            search: "",
            show: false,
            autoFocus: "true"
        },()=>{
            console.log(this.state.autoFocus);
        })
        
    }
    focus () {
        this.setState({
            focus: true
        })
    }
    blur () {
        this.setState({
            focus: false,
            autoFocus: ""
        })
    }
    out () {
        localStorage.removeItem("user");
        this.props.history.push("/register");
    }
}
export default Search;