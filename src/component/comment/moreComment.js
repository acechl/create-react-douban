import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import Comment from "../../common/comment";
import cs from "classnames";
import Toast from "../../common/toast";
class MoreComment extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            items: [],
            show: false,
            num: 240,
            fade:false,
            text:"",
            comments: [],
            comment: [],
            hidden: false,
            number: 0,
            lineHeight: false,
            message: "",
            danger: false,
            toast: false
        }
    }
    render () {
        return (
            <div className="moreComment page">
                <Header></Header>
               <div className={cs({
                "toa": !this.state.toast,
                "toastBox": this.state.toast,
            })}>
                    <Toast mes={this.state.message} danger={this.state.danger}></Toast>
                </div>
                <Comment data = {this.state.items}></Comment>
                <div className={cs({
                    "none": this.state.hidden,
                    "block": !this.state.hidden,
                    "answer":true
                })}>
                    <h6>回应{this.state.number}</h6>
                    <Comment data={this.state.comments}></Comment>
                </div>
                <Footer></Footer>
                <div className="response" onClick={this.addRes.bind(this)}>添加回应</div>
                <div className={cs({
                    "bg": true,
                    "none": !this.state.show,
                    "fade": this.state.show
                })} onClick={this.hidden.bind(this)}></div>
                <div className={cs({
                    "addRes":true,
                    "none": !this.state.show,
                    "downUp": this.state.show,
                    "upDown":this.state.fade
                })}>
                    <div className="text">
                        <textarea placeholder="添加回应" onChange={this.addText.bind(this)} value={this.state.text} ref="textarea"></textarea>
                    </div>
                    <div onClick={this.adding.bind(this)} className={cs({
                            "lineHeight": this.state.lineHeight,
                            "add": true
                        })} >
                        加上去
                        <span>{this.state.num}</span>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount () {
        let datas = [];
        console.log(this.state.id);
        datas = datas.concat(JSON.parse(localStorage.getItem("broadcast"+this.state.id)));
        let comment = JSON.parse(localStorage.getItem("comment"+this.state.id)) || [];
        this.setState({
            items: datas,
            comments: comment
        },()=>{
            if(this.state.comments.length != 0){
                this.setState({
                    hidden: false,
                    number: this.state.comments.length
                })
            }else {
                this.setState({
                    hidden: true,
                    number: 0
                })
            }
        })
    }
    addRes () {
        this.setState({
            show: true,
            fade: false
        })
    }
    hidden () {
        this.setState({
            fade: true
        })
        setTimeout(()=>{
            this.setState({
                show: false
            })
        },400)
    }
    addText (event) {
        let len = event.currentTarget.value.length;
        if(len > 0) {
            this.setState({
                lineHeight: true
            })
        }else {
            this.state({
                lineHeight: false
            })
        }
        if(len >= 240) {
            let text = event.currentTarget.value.substr(0,240);
            this.setState({
                num:0,
                text: text
            })
        }else {
            this.setState({
                num: 240 - event.currentTarget.value.length,
                text: event.currentTarget.value
            })
        }
    }
    adding () {
        if(this.refs.textarea.value.length == 0) {
            console.log("空的");
            this.setState({
                danger: true,
                message: "该评论为空",
                toast: true,
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        toast: false,
                    })
                    return;
                },5000)
            })
            return;
        }
        
        let arr = JSON.parse(localStorage.getItem("comment"+this.state.id)) || [];
        let time = new Date().getTime();
        arr = arr.concat({"text":this.state.text,"time":time,user:"acechl"})
        localStorage.setItem("comment"+this.state.id,JSON.stringify(arr));
        let comment = this.state.comments;
        comment = comment.concat({"text":this.state.text,"time":time,user:"acechl"})
        this.setState({
            comments: comment,
           
            message: "添加成功",
            toast: true,
            danger: false,
        },()=>{
            setTimeout(()=>{
                this.hidden();
                this.setState({
                    toast: false,
                    lineHeight: false,
                })
                this.setState({
                    text: ""
                })
            },2000)
        })
    }
}
export default MoreComment;