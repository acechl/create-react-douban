import React,{Component} from "react";
import "../less/style.less";
import {Link} from "react-router-dom";

class Classify extends Component{
    render () {
        return (
            <div class="classify">
                <div className="top">
                    <h4>{this.prop.title}</h4>
                    <Link to="/moreChoose">更多</Link>
                </div>
                <div className="content">
                    <ul>
                        for
                    </ul>
                </div>
            </div>
        )
    }
}
export default Classify;