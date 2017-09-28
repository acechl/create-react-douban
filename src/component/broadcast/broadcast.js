import React, {Component} from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import {Link} from "react-router-dom";
import Callback from "../../common/callback";
import Comment from "../../common/comment";
import "../../index.less"
class Broadcast extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            status: "登录发广播",
            route:""
        }
    }
    render () {
        return (
            <div className="broadcast page">
                <Header></Header>
                <Callback name="打开App,回复广播"></Callback>
                <div className="share clearfix">
                    <div>
                        <Link to={this.state.route} className="clearfix">
                        <div className="fl">
                            <span></span>
                            <span>{this.state.status}</span>  
                        </div>
                        <div className="fr">
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                    </div>
                </div>
                <Comment data = {this.state.items}></Comment>
                <Footer value="在App中刷广播更愉快"></Footer>
            </div>
        )
    }
    componentWillMount () {
        if(localStorage.getItem("user") != null) {
            this.setState({
                status: "分享生活点滴...",
                route: "broadcast/publicBroadcast"
            })
        }else {
            this.setState({
                status: "登录发广播",
                route: "/register"
            })
        }
        let item = localStorage.getItem("item") || 0;
        let datas = [];
        for(let i=0;i<item;i++){
            if(localStorage.getItem("broadcast"+i)){
                 datas = datas.concat(JSON.parse(localStorage.getItem("broadcast"+i)));
            }
        }
        for(let i = 0;i<datas.length;i++){
            datas[i].display = false;
        }
        this.setState({
            items: datas
        })
    }
}
export default Broadcast;