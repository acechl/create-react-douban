import React,{Component} from "react";
import "../less/style.less";
import {Link} from "react-router-dom";
import 'whatwg-fetch';
import $ from "jquery";
import Star from "./star"
let startX = 0;
let distanceX = 0;
let bounce = 300;
let htmlWidth = 0;
let elementWidth = 0;
let targetX;
// import store from "../redux/redux"
class ClassifyState extends Component {
    constructor (props) {
        super(props);
        this.state= {
            datas: []
        }
    }
    render () {
        return (
            <div>
                <Classify name={this.props.name} value={this.state.datas}></Classify>
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
            }
        })
    }
    componentDidMount () {
        // function todoAction (text) {
        //     return {
        //         type: "loginTrue",
        //         payload: "hello"
        //     }
        // }
        // let listen = ()=>{
        //     this.setState({
        //         login: store.getState()
        //     })
        // }
        // store.dispatch(todoAction());
        // store.subscribe(listen);
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
                    <ul className="clearfix" onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd}>
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
                                                    <span></span>
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
    constructor (props) {
        super (props);
        this.state = {
            endX: 0
        }
        this.touchMove = this.touchMove.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
    }
     touchStart (event) {
        htmlWidth = $("html").width();
        elementWidth = $(event.currentTarget).width();
        startX = event.touches[0].pageX;
    }
    touchMove (event) { 
        distanceX = event.touches[0].pageX - startX;
        if(distanceX > bounce) {
            distanceX = bounce
        }else if(distanceX <= htmlWidth - elementWidth - bounce){
            distanceX = htmlWidth- elementWidth - bounce;
        }
        targetX = Number(this.state.endX)+ distanceX;
        $(event.currentTarget).css({
            "transform":"translateX("+targetX+"px)",
        })
        
    }
    touchEnd (event) {
        let target = event.currentTarget;
        let _this = this;
        this.setState({
            endX: Number(_this.state.endX) + distanceX
        },function(){
            judge()
        })
       let judge = ()=>{
            if(this.state.endX > 0 && this.state.endX <= bounce){
            this.setState({
                endX: 0
            },()=>{
                change()
            })
        }else if(this.state.endX> htmlWidth - elementWidth - bounce && this.state.endX <= htmlWidth - elementWidth) 
        {
            this.setState({
                endX: Number(htmlWidth) - elementWidth
            },function(){
               change()
            })
        }
       }
        let change = function(event){
            $(target).css({
                "transform":"translateX("+_this.state.endX+"px)",
                "translate": ".3s"
            });
        }
        
    }
    componentDidMount () {
    }
}
export default ClassifyState;