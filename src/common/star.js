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
            </div>
        )
    }
}
export default Star;