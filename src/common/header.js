import React,{Component} from "react";
import {Link} from "react-router-dom";
class Header extends Component{
    render () {
        return (
            <div className="header clearfix">
                <Link to="/" className="logo fl"></Link>
                <div className="fr">
                    <ul className="clearfix">
                        <li>
                            <Link to="/movie" style={{color:"#2384E8"}}>电影</Link>
                        </li>
                        <li>
                            <Link to="/book" style={{color: "#9F7860"}}>图书</Link>
                        </li>
                        <li>
                            <Link to="/broadcast" style={{color:"#E4A813"}}>广播</Link>
                        </li>
                        <li>
                            <Link to="/team" style={{color:"#2AB8CC"}}>小组</Link>
                        </li>
                        <li>
                            <Link to="/search" className="search"></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}   
export default Header;