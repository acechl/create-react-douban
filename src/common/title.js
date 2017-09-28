import React, {Component} from "react";
import {Link} from "react-router-dom";
class Title extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render () {
        let makeSure = null;
        if(this.props.sure){
            makeSure = <span onClick={this.props.click} id="sure">确定</span>
        }else  {
            makeSure = <span onClick={this.props.click}>确定</span>
        }
        return (
            <div className="titles">
                <Link to={"/moreDetail/"+this.props.id}>取消</Link>
                <span>{this.props.title}</span>
                {makeSure}
            </div>
        )
    }
    componentWillMount () {
        console.log(this.props.title);
        console.log(this.props.id);
    }
}
export default Title;