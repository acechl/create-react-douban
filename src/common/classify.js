import React,{Component} from "react";
import "../less/style.less";
import {Link} from "react-router-dom";
import 'whatwg-fetch';
import $ from "jquery";
import Star from "./star"
import store from "../redux/redux"
class ClassifyState extends Component {
    constructor (props) {
        super (props);
        this.state = {
            datas: []
        }
    }
    render () {
        return (
            <div>
                <Classify name={this.props.name} value={this.state.datas}></Classify>  
                <div>{this.state.login}</div>
            </div>
        )
    }
    componentWillMount () {
        $.ajax({
            type:"post",
            dataType:"jsonp",
            url:this.props.url,
            success: response=> {
                this.setState({
                    datas:response.subjects.splice(0,8)
                })
                console.log(this.state.datas)
            }
        })
    }
    componentDidMount () {
        function todoAction (text) {
            return {
                type: "loginTrue",
                payload: "hello"
            }
        }
        let listen = ()=>{
            this.setState({
                login: store.getState()
            })
        }
        store.dispatch(todoAction());
        store.subscribe(listen);
    }
    getInitialState () {
        return {
            login: false
        }
    }
}
class Classify extends Component{
    render () {
        return (
            <div className="classify list">
                <div className="top  clearfix">
                    <h4 className="fl title">{this.props.name}</h4>
                    <Link to="/moreChoose" className="fr more">更多</Link>
                </div>
                <div className="content">
                    <ul className="clearfix">
                        {
                            this.props.value.map(item=>{
                                return (
                                    <li className="fl">
                                        <Link to={"/moreDetail:"+item.id}>
                                            <div>
                                                <img src={item.images.large} alt=""/>
                                                <h6>{item.title}</h6>
                                                <div className="fl rating">
                                                    <Star score={item.rating.average}></Star>
                                                    <span className="fl">{item.rating.average}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
}
export default ClassifyState;