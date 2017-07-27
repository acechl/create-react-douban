import React,{Component} from "react";
import {Link} from "react-router-dom"
class Footer extends Component{
    render () {
        return (
            <div className="footer">
                <div className="logo">
                    <Link to="/homePage"></Link>
                    <div className="content">
                        <p>豆瓣</p>
                        <p>{this.props.value}</p>
                    </div>
                </div>
                <p className="download">免费下载ios/Android版客户端</p>
            </div>
        )
    }

}
export default Footer;