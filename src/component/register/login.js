import React,{Component} from "react";
import Toast from "../../common/toast";
import cs from "classnames";
// import {Link} from "react-router-dom";
class Login extends Component{
    constructor (props) {
        super(props);
        this.state = {
            message: "",
            toast: false,
            danger: false,
            types: "password",
            hidden: false
        }
    }
    render () {
        return (
            <div className="login">
                <div className={cs({
                    "toa": !this.state.toast,
                    "toastBox": this.state.toast,
                })}>
                    <Toast mes={this.state.message} danger={this.state.danger}></Toast>
                </div>
                <h2>欢迎加入豆瓣</h2>
                <div className="input">
                    <div className="userName">
                        <input type="text" placeholder="邮箱/手机号" ref="user"/>
                    </div>
                    <div className="pass pr">
                        <span className={cs({
                            "eyes":true,
                            "eyeShow": this.state.hidden,
                            "eyeHidden": !this.state.hidden
                        })} onClick={this.change.bind(this)}></span>
                        <input type={this.state.types} placeholder="密码(最少6位)" ref="pass"/>
                    </div>
                    <div className="nickName">
                        <input type="text" placeholder="昵称" ref="nick"/>
                    </div>
                    <button onClick={this.loginBtn.bind(this)}>注册</button>
                </div>
                <div className="tips">点击[下一步]代表你已阅读并同意用户使用协议</div>
                <div className="download">下载豆瓣App</div>
            </div>
        )
    }
    loginBtn () {
        let user = this.refs.user.value;
        let pass = this.refs.pass.value;
        let nick = this.refs.nick.value;
        let phone = localStorage.getItem("user") || 0
        let reg = /^1[34578]\d{9}$/; 
        if(user.length == 0 || pass.length == 0 || nick.length == 0) {
            this.setState({
                message: "账号、密码或者昵称不能为空",
                toast: true,
                danger: true
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        toast: false,
                    })
                    return;
                },5000)
            })
        }else if(!reg.test(user)){
            this.setState({
                message:"请输入正确的手机号码",
                toast: true,
                danger: true
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        toast: false
                    });
                    return;
                },5000)
            })
        }else if(pass.length < 6) {
            this.setState({
                message:"密码少于6位",
                toast: true,
                danger: true
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        toast: false
                    });
                    return;
                },5000)
            })
        }else if(user == phone) {
            this.setState({
                message:"该手机号码已注册",
                toast: true,
                danger: true
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        toast: false
                    });
                    return;
                },5000)
            })
        }else {
            this.setState({
                message:"注册成功",
                toast: true,
                danger: false
            },()=>{
                localStorage.setItem("user",user);
                localStorage.setItem("pass",pass);
                localStorage.setItem("nick",nick);
                setTimeout(()=>{
                    this.props.history.push("/broadcast");
                },2000)
            })
        }
    }
    change () {
        this.setState({
            hidden: !this.state.hidden
        },()=>{
            if(this.state.hidden){
                this.setState({
                    types: "text"
                })
            }else {
                this.setState({
                    types:"password"
                })
            }
        })
    }
}
export default Login;