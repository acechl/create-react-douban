import cs from "classnames";
import React,{Component} from "react";
import {Link} from "react-router-dom";
import "../../index.less";
class PublicBroadcast extends Component {
    constructor (props) {
        super (props);
        this.state = {
            num: 140,
            value: "",
            name: ["野原新之助","风间彻","樱田妮妮","正男","啊呆"],
            hiden: true,
            image:""
        };
        this.someoneShow = this.someoneShow.bind(this);
        this.wordChange = this.wordChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.topicChange = this.topicChange.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.submitBroadcast = this.submitBroadcast.bind(this);
    }
    wordChange () {
        this.setState({
            value : this.refs.textarea.value,
            num: 140-this.refs.textarea.value.length
        })
    }
    someoneShow () {
        console.log("in");
        this.setState({
            hiden: false
        })
    }
    imageChange () {
        
    }
    topicChange () {
        this.setState({
            value: this.state.value + "#请输入你的话题#",
            num: this.state.num - 9
        })
    }
    submitBroadcast () {
        if(this.state.value == "") return;
        let item = localStorage.getItem("item") || 0;
        let time = new Date().getTime();
        let obj = {
            text: this.state.value,
            image: this.state.image,
            time: time,
            like: 0,
            comment: 0,
            transport: 0,
            id:item
        }
        localStorage.setItem("broadcast"+item,JSON.stringify(obj));
        this.setState({
            value: "",
            image: "",
            num: 140,
            
        })
        localStorage.setItem("item",Number(item)+1);
        this.props.history.push("/broadcast");
    }
    mouseEnter (event) {
        this.setState({
            value: this.state.value + "@" + event.currentTarget.innerText,
            hiden: true,
            num: this.state.num - 1 - event.currentTarget.innerText.length
        },()=>{
            console.log(this.state.value)
        })
    }
    render () {
        return (
            <div className="public">
                <div className="top">
                    <Link to="/broadcast">取消</Link>
                    <span>发广播</span>
                    <span onClick={this.submitBroadcast}>发布</span>
                </div>
                <form>
                    <div>
                        <div className="content">
                            <textarea ref="textarea" placeholder="分享生活点滴..." name="content" onChange={this.wordChange} value={this.state.value}></textarea>
                            <ul className="imageList"></ul>
                        </div>
                    </div>
                    <div className="bottom clearfix">
                        <div className="img fl">
                            <input type="file" accept="image/png,image/gif,image/jpg,image/jepg" name="image" onChange={this.imageChange}/>
                        </div>
                        <div className="fl pr">
                            <span className="someone" onClick={this.someoneShow}></span>
                            <ul className = {cs({
                                "someoneName":true,
                                "pa":true,
                                "hiden":this.state.hiden
                            })}>
                                {
                                    this.state.name.map((value,index)=>{
                                        return (
                                            <li onClick={this.mouseEnter} key={index}>{value}</li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                        <span className="fl topic" onClick={this.topicChange}></span>
                        <span className="fr">{this.state.num}</span>
                    </div>
                </form>
            </div>
        )
    }
}
export default PublicBroadcast