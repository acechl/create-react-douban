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
            </div>
        )
    }
}
export default Star;