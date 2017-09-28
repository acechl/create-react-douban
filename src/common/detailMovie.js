import React, {Component} from "react";
import Star from "./star";
import {Link} from "react-router-dom";
import $ from "jquery";
import utils from "../tool/utils";
class DetailMovie extends Component{
    constructor (props) {
        super(props);
        this.state = {
            datas :[],
        }
    }
    render () {
        return (
           <div>
             <Detail value={this.state.datas} id={this.props.id}></Detail>
           </div>
        )
    }
    componentWillMount () {
       $.ajax({
            dataType: "jsonp",
            type: "post",
            url: "https://api.douban.com/v2/movie/"+ this.props.id,
            success: response => {
                response = this.state.datas.concat(response);
                console.log(response);
                this.setState({
                    datas: response
                },()=>{
                    console.log(this.state.datas);
                })
            }
        })
    }
}
class Detail extends Component{
    constructor (props) {
        super(props);
        this.state = {
            opens: "(展开)"
        }
    }
    render (){
        return (
            <div className="DetailMovie">
               {
                    this.props.value.map((items,index)=>{
                    return (
                        <div key={index}>
                            <div className="top">
                            <h3>{items.alt_title}</h3>
                    <div className="content">
                        <div className="score">
                            <Star score={items.rating.average}></Star>
                            <span className="rating">{items.rating.average}</span>
                            <span className="numRaters">{items.rating.numRaters}人评论</span>
                        </div>
                        <div className="director">
                            <span>{items.attrs.movie_duration[0]}/</span>
                            <span>{items.attrs.movie_type[0]}/</span>
                            <span>{items.attrs.director[0]}(导演)/</span>
                            {
                                items.attrs.cast.map(item=>{
                                    return (
                                        <span>{item}/</span>
                                    )
                                })
                            }
                            <span>{items.attrs.country[0]}{items.attrs.year}上映</span>
                        </div>
                    </div>
                    <img src={items.image} alt=""/>
                </div>
                <div className="second clearfix">
                    <p>用APP查看影人资料</p>
                    <Link to={"/wanted/"+this.props.id+"/wanted"} className="fl">想看</Link>
                    <Link to={"/wanted/"+this.props.id+"/isDone"} className="fr">看过</Link>
                </div>
                <div className="third">
                    <h6>{items.title}的剧情简介</h6>
                    <div className="summary">
                        <p ref="summary" value={items.summary}>{utils.substr(items.summary)}</p>
                        <span onClick={this.opening.bind(this,items.summary,utils.substr(items.summary))} className="open">{this.state.opens}</span>
                    </div>
                </div>
                <div className="forth">
                    <h6>影人</h6>
                    <ul>
                        {
                            items.attrs.director.map(director=>{
                                return (
                                    <li>
                                        <Link to={"/cast/"+director.id}>
                                        
                                            <p>{director.name}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        {
                           items.attrs.cast.map(cast=>{
                                return (
                                    <li>
                                        <a href="#">
                                            <p>{cast.name}</p>
                                        </a>
                                    </li>
                                )
                           })
                        }
                    </ul>
                </div>
                <div className="type">
                    <h6>查看更多豆瓣高分电影电视剧</h6>
                    <ul className="clearfix">
                        {
                            items.tags.map(item=>{
                                return (
                                    <li className="fl">
                                        <Link to={"/type/"+item.count}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                        </div>
                    )
                })
               }
            </div>
        )
    }
    opening (longSummary,shortSummary) {
        if(this.state.opens == "(展开)"){//当为false的时候，表示没有展开 需要展开
            $(this.refs.summary).attr("value",shortSummary);
            $(this.refs.summary).html(longSummary);
            this.setState({
                opens: "(收起)"
            })
        }else if(this.state.opens == "(收起)"){
            $(this.refs.summary).attr("value",longSummary);
            $(this.refs.summary).html(shortSummary);
            this.setState({
                opens: "(展开)"
            })
        }
    }
}
export default DetailMovie;