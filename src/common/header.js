import React,{Component} from "react";
import {Link} from "react-router-dom";
class Header extends Component{
    render () {
        return (
            <div className="header">
                <Link to="/" className="logo"></Link>
                <div>
                    <ul>
                        <li>
                            <Link to="/movie">电影</Link>
                        </li>
                        <li>
                            <Link to="/book">图书</Link>
                        </li>
                        <li>
                            <Link to="/broadcast">广播</Link>
                        </li>
                        <li>
                            <Link to="/team">小组</Link>
                        </li>
                        <li>
                            <Link to="/search"></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}   
export default Header;