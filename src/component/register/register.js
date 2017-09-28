import React,{Component} from "react";
import {Link} from "react-router-dom";
import cs from "classnames";
import Toast from "../../common/toast";
class Register extends Component {
    render () {
        return (
            <div className="register page">
                <div className={cs({
                "toa": !this.state.toast,
                "toastBox": this.state.toast,
            })}>
                    <Toast mes={this.state.message} danger={this.state.danger}></Toast>
                </div>
                <div className="reHeader">
                    <a className="cancel" href="javascript:;" onClick={this.cancel.bind(this)}>取消</a>
                    登录豆瓣
                </div>
                <div className="input">
                    <div className="userName">
                        <input type="text" placeholder="邮箱/手机号/用户名" ref="user"/>
                    </div>
                    <div className="pass pr">
                        <span onClick={this.change.bind(this)} className={cs({
                            "eyes":true,
                            "eyeShow": this.state.hidden,
                            "eyeHidden": !this.state.hidden
                        })}></span>
                        <input type={this.state.types} placeholder="密码" ref="pass"/>
                    </div>
                    <button onClick={this.submitBtn.bind(this)}>登录</button>
                </div>
    <div className="others" onClick={this.otherShow.bind(this)}>使用其他方式登录&找回密码</div>
                <div className="login">
                    <Link to="login" className="loginDouban">注册豆瓣账号</Link>
                    <span className="download">下载豆瓣App</span>
                </div>
                <div className={cs({
                    "bg":true,
                    "open": this.state.open
                })}></div>
                <div className={cs({
                    "other":true,
                    "open": this.state.open
                })}>
                    <span onClick={this.closeBtn.bind(this)}>x</span>
                    <ul>
                        {
                            this.state.type.map((item,index)=>{
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    constructor (props) {
        super(props);
        this.state = {
            open: false,
            type: ["用微博登录","用微信登录","用手机验证码登录","找回密码"],
            message: "",
            toast: false,
            danger: false,
            types: "password",
            hidden: false
        }
    }
    otherShow () {
        this.setState({
            open: true
        })
    }
    closeBtn () {
        this.setState({
            open: false
        })
    }
    submitBtn () {
        let user = this.refs.user.value;
        let pass = this.refs.pass.value;
        let reg = /^1[34578]\d{9}$/; 
        let realUser = localStorage.getItem("user");
        let realPass = localStorage.getItem("pass");
        if(user.length == 0 || pass.length == 0) {
            this.setState({
                message: "账号或者密码不能为空",
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
        }else if(user != realUser) {
            this.setState({
                message:"手机号码没有注册",
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
        }else if(pass != realPass) {
            this.setState({
                message:"密码不正确",
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
                message:"登录成功",
                toast: true,
                danger: false
            },()=>{
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
    cancel () {
        this.props.history.goBack()
    }
}
export default Register;
