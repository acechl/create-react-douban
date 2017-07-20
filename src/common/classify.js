import React,{Component} from "react";
import "../less/style.less";
import {Link} from "react-router-dom";
import 'whatwg-fetch';
import $ from "jquery";
import Star from "./star";
class ClassifyState extends Component {
    constructor (props) {
        super (props);
        this.state = {
            datas: []
        }
    }
    render () {
        return (
            <div>
                <Classify name={this.props.name} value={this.state.datas}>
                
                </Classify>  
            </div>
        )
    }
    componentWillMount () {
        $.ajax({
            type:"post",
            dataType:"jsonp",
            url: this.props.url,
            success: response=>{
                this.setState({
                    datas: response.subjects
                })
                console.log(this.state.datas)
            }
            
        })
    }
    
}
class Classify extends Component{
    render () {
        return (
            <div className="classify">
                <div className="top">
                    <h4>{this.props.name}</h4>
                    <Link to="/moreChoose">更多</Link>
                </div>;
                <div className="content">
                    <ul>
                        {
                            this.props.value.map(item=>{
                                return (
                                    <li>
                                       <Link to={"/moreDetial:"+item.id}>
                                            <div>
                                                <img src={item.images.small} alt=""/>
                                                <h6>{item.title}</h6>
                                                <div>
                                                    <Star score={item.rating.average}></Star>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
}
export default ClassifyState;