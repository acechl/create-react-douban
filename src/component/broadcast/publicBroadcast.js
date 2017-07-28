import React,{Component} from "react";
import {Link} from "react-router-dom";
class PublicBroadcast extends Component {
    constructor (props) {
        super(props);
        this.state= {
            num: 140
        }
        this.someoneChange = this.someoneChange.bind(this);
        this.wordChange = this.wordChange.bind(this);
        // this.someoneChange = this.someoneChange.bind(this);
        // this.topicChange = this.topicChange.bind(this);
    }
    wordChange () {
        let numbers = this.refs.textarea.value;
        console.log(numbers);
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
                            <input type="file" accept="image/png,image/gif,image/jpg,image/jepg" name="image"/>
                        </div>
                        <div className="fl">
                            <span className="someone" onClick={this.someoneChange}></span>
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