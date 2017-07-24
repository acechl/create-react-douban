<<<<<<< HEAD
import React, {Component} from "react";

class Star extends Component {
    render () {
        let className = [];
        for(let i=1;i<=9;i=i+2){
            if(this.props.score >= i){
                className.push("full")
            }else {
                className.push("empty")
            }
        }
        return (
            <div className="star fl">
                {
                    className.map(value=>{
                        return (
                            <span className={value}></span>
                        )
                    })
                }
=======
import React,{Component} from "react";

class Star extends Component{
    render () {
        let className = ["empty","empty","empty","empty","empty"];
        let page = 1;
        for(var i=1;i<=9;i+2){
            page++;
            if(this.props.score >= i){
                className[page] = "full";
            }
        }
        return (
            <div>
               {
                   className.map(value=>{
                    return (
                        <span className="{yellow: this.props.score >= 10,gray: this.props.score < 10}"></span>
                    )
                })
                
               }
>>>>>>> 20f3fa95ed3f626b1be2c0320743a21ca5667b6d
            </div>
        )
    }
}
export default Star;