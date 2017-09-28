import React from "react";
import {Link} from "react-router-dom";
import $ from "jquery";
import cs from "classnames";
class Comment extends React.Component{
    constructor (props) {
        super(props);
        this.state= {
            items: [],
            user:""
        }
    }
    shouldComponentUpdate (nextProps, nextState) {
      return true;
    }
    render () {
        return (
            <div className="comment">
                <ul>
                    {
                        this.props.data.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <Link to={"/moreComment/"+item.id}>
                                        <span className="pic"></span>
                                        <div className="contents">
                                            <p>{this.state.user}<span>说</span></p>
                                            <p className="time">{this.formatTime(item.time)}</p>    
                                            <p className="content">{item.text}</p>
                                            <div className="svg clearfix">
                                                <div className="like svgs fl" onClick={this.liking.bind(this,item.id,item.like)}>
                                                     {item.like}
                                                </div>
                                                <div className="com svgs fl">
                                                    {item.comment}
                                                </div>
                                                <div className="transport svgs fl">
                                                    {item.transport}
                                                </div>
                                                <div className="more fr" onClick={this.getMore.bind(this,item.id)}>...
                                                    <div ref={"more"+item.id} className={cs({
                                                        "none": !item.display,
                                                        "block":item.display,
                                                        "delete":true,
                  "clearfix" : true                                  })}>
                                                        <span className="fl" onClick={this.delete.bind(this,item.id)}>删除</span>
                                                        <span className="fr">举报</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentWillMount () {
        this.setState({
            user:localStorage.getItem("user")
        })
    }
    componentDidMount () {
    }
    formatTime (fmt) {
        function add0(m){return m<10?'0'+m:m }
        var time = new Date(fmt);
	    var y = time.getFullYear();
	    var m = time.getMonth()+1;
	    var d = time.getDate();
	    var h = time.getHours();
	    var mm = time.getMinutes();
	    var s = time.getSeconds();
    	return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
    }
    getMore (id,event) {
        event.preventDefault();
        let items = this.state.items;
        items.map((item)=>{
            if(item.id == id){
                item.display = !item.display
            }
        })
        this.setState({
            items: items
        })
    }
    liking (id,num,event) {
        event.preventDefault();
        let items = this.state.items;
        items.map((item)=>{
            if(item.id == id){
                item.like = num + 1;
                localStorage.setItem("broadcast"+id,JSON.stringify(item));
            }
        })
        this.setState({
            items: items
        })
    }
    delete (id,event) {
        event.preventDefault();
        localStorage.removeItem("broadcast"+id);
        let items = this.state.items;
        items.map((item,index)=>{
            if(item.id == id){
                items.splice(index,1);
            }
        })
    }
}
export default Comment;