import React,{Component} from "react";
import $ from "jquery";
import Header from "../../common/header";
import {Link} from "react-router-dom";
import Star from "../../common/star"
class Result extends Component {
    constructor (props) {
        super(props);
        this.state = {
            search: props.match.params.search,
            value: props.match.params.search,
            items: []
        }
    }
    render () {
        return (
            <div className="result page">
                <Header></Header>
                <div className="resultSearch">
                    <input type="text" placeholder="搜索电影" value={this.state.value} onChange={this.change.bind(this)}/>
                    <span onClick={this.search.bind(this)}>搜索</span>
                </div>
                <div className="content">
                    <p className="title">影视</p>
                    <div>
                        <ul>
                            {
                                this.state.items.map((item,index)=>{
                                   return (
                                        <li key={item.id}>
                                            <Link to={"/moreDetail/"+item.id}>
                                                <img src={item.images.large}/>
                                                <div className="right">
                                                    <p>{item.title}</p>
                                                    <div className="score">
                                                        <Star score={item.rating.average}></Star>
                                                        <span>{item.rating.average}</span>
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
            </div>
        )
    }
    componentWillMount () {
        $.ajax({
            url: "https://api.douban.com/v2/movie/search?q="+this.state.search,
            dataType: "jsonp",
            success: (json)=>{
                this.setState({
                    items: json.subjects
                })
                console.log(json);
            }
 
        })
    }
    search () {
        this.props.history.push("/result/"+this.state.value)
    }
    change (event) {
        this.setState({
            value: event.target.value
        })
    }
}
export default Result;