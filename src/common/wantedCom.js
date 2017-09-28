import React,{Component} from "react";
import Star from "./star.js";
import utils from "../tool/utils"
class WantedCom extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return (
            <div className="wantedcom">
                <div className="user"></div>
                <div className="content">
                    <div className="name clearfix">
                        <span className="fl">acechl</span>
                        {
                            this.props.scale == "a" && <div className="littleStar fl">
                                                        <Star score={this.props.item.score}></Star>
                                                    </div>
                        }
                    </div>
                    {this.props.item.time && <div className="time">
                        {utils.formatTime(this.props.item.time)}
                    </div>}
                    <div className="babels">
                        {
                            this.props.item.babels.map((items,index)=>{
                               return (
                                    <a href="javascript:;" key={index}>{items}</a>
                               )
                            })
                        }
                    </div>
                    <div className="comment">{this.props.item.comment}</div>
                </div>
            </div>
        )
    }
    componentWillMount () {
        console.log(this.props.item);
        console.log(this.props.item.babels);
    }
}
export default WantedCom;