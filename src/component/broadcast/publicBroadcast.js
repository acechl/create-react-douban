import React,{Component} from "react";
import {Link} from "react-router-dom";
import cs from "classnames";
class PublicBroadcast extends Component {
    constructor (props) {
        super (props);
        this.state = {
            num: 140,
            value: "",
            name: ["野原新之助","风间彻","樱田妮妮","正男","啊呆"],
            hiden: true
        };
        this.someoneShow = this.someoneShow.bind(this);
        this.someoneHide = this.someoneHide.bind(this);
        this.wordChange = this.wordChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.topicChange = this.topicChange.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }
    wordChange () {
        this.setState= {
            value : this.refs.textarea.value
        }
    }
    someoneShow () {
        this.setState={
            hiden: false
        }
    }
    someoneHide () {
        this.setState={
            hiden: true
        }
    }
    imageChange () {
        
    }
    topicChange () {
        
    }
    mouseEnter () {

    }
    mouseLeave () {

    }
    render () {
        return (
            <div className="public">
                <div className="top">
                    <Link to="/broadcast">取消</Link>
                    <span>发广播</span>
                    <span>发布</span>
                </div>
                <form>
                    <div>
                        <div className="content">
                            <textarea ref="textarea" placeholder="分享生活点滴..." name="content" onChange={this.wordChange}></textarea>
                            <ul className="imageList"></ul>
                        </div>
                    </div>
                    <div className="bottom clearfix">
                        <div className="img fl">
                            <input type="file" accept="image/png,image/gif,image/jpg,image/jepg" name="image" onChange={this.imageChange}/>
                        </div>
                        <div className="fl pr">
                            <span className="someone" onMouseEnter={this.someoneShow} onMouseLeave={this.someoneHide}></span>
                            <ul className= cs({"someoneName":true,"pa":true,"hiden":this.state.hiden})>
                                {
                                    this.state.name.map((value)=>{
                                        return (
                                            <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>{value}</li>
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