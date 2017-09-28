import React, {Component} from "react";
import $ from "jquery";
import Callback from "../../common/callback";
import "../../index.less";
import Header from"../../common/header";
import DetailMovie from "../../common/detailMovie";
import WantedCom from "../../common/wantedCom"
// import {createStore} from "redux";
class MoreDetail extends Component{
    constructor (props) {
        super(props);
        this.state = {
            id:props.match.params.id,
            detail: {dd:33},
            before: [],
            after: [],
            star:[]
        }
    }
    componentWillMount () {
        let b = JSON.parse(localStorage.getItem("b_"+this.state.id)) || [];
        let a = JSON.parse(localStorage.getItem("a_"+this.state.id)) || [];
        this.setState({
            before: b,
            after: a
        },()=>{
            console.log(this.state.before);
            console.log(this.state.after);
        })
    }
    componentDidMount () {
        console.log(this.state.id)
    }
     render () {
        return (
            <div className="moreDetail page">
                <Header></Header>
                <Callback name="App打开 查看影人"></Callback>
                <DetailMovie id={this.state.id}></DetailMovie>
                    <h6>观前感</h6>
                    {
                        this.state.before.map((item,index)=>{
                            return (
                                <WantedCom item={item} key={index} scale="b"></WantedCom>
                            )
                        })
                    }
                    <h6>观后感</h6>
                     {
                        this.state.after.map((item,index)=>{
                            return (
                                <WantedCom item={item} key={index} scale="a"></WantedCom>
                            )
                        })
                    }
            </div>
        )
    }
}
export default MoreDetail;