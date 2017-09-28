import React,{Component} from "react";
import Title from "../../common/title";
import $ from "jquery";
import utils from "../../tool/utils";
import Babel from "../../common/babel";
import Toast from "../../common/toast";
import Score from "../../common/score";
import cs from "classnames";
// import Star from "../../common/star";
class Wanted extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: props.match.params.title,
            data: [],
            textarea: "",
            babels: [],
            sure: false,
            message: "",
            toast: false,
            danger: false,
            origin: [],
            newOrAdd: true,
            size: 3,
            add: [],
            type: props.match.params.type,
            score:[false,false,false,false,false],
            sco: 0
        }
    }
    render () {
        return (
            <div className="wanted">
                <div className={cs({
                    "toa": !this.state.toast,
                    "toastBox": this.state.toast,
                })}>
                    <Toast mes={this.state.message} danger={this.state.danger}></Toast>
                </div>
               {
                    this.state.data.map((item,index)=>{
                         return (
                            <div key={index}>
                                <Title title={utils.subTitle(item.alt_title)} id={this.state.id} click={this.makeSure.bind(this)} sure={this.state.sure}></Title>
                                {this.state.type == "isDone"&&
                                    <div className="starScore clearfix">
                                    {
                                        this.state.score.map((item,index)=>{
                                           return (
                                                <Score key={index} star={item} scoring={this.score.bind(this)} name={index}></Score>
                                           )
                                        })
                                    }
                                </div>}
                                <Babel 
                                    babel={this.state.origin} 
                                    babelChange={this.babelChange.bind(this)} 
                                    textChange={this.textChange.bind(this)} 
                                    text={this.state.textarea} 
                                    inputChange={this.change.bind(this)} 
                                    size={this.state.size} 
                                    adding={this.adding.bind(this)} 
                                    inputRef={el=>this.inputRef = el} 
                                    adding={this.adding.bind(this)} 
                                    add={this.state.add}
                                ></Babel>
                            </div>
                        )
                    })
               }
            </div>
        )
    }
    componentWillMount () {
        console.log(this.state.id);
       $.ajax({
            dataType: "jsonp",
            type: "post",
            url: "https://api.douban.com/v2/movie/"+ this.state.id,
            success: (response)=>{
                let origin = response.tags;
                origin.map((item)=>{
                    item.choose = false
                })
                this.setState((prevState, props) => ({
                    data: prevState.data.concat(response),
                    origin: origin
                }));
            }
       })
    }
    makeSure () {
        if(this.state.textarea.length == 0 && this.state.babels.length == 0) {
            this.setState({
                message: "短评或打标签不能为空",
                toast: true,
                danger: true,
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        toast: false,
                    })
                    return;
                },5000)
            })
        }else {
            let array = localStorage.getItem("b_"+this.state.id) || [];
            let arrays = localStorage.getItem("a_"+this.state.id) || [];
            let time = new Date().getTime();
            if(this.state.type == "isDone") {
                 arrays = arrays.concat({babels:this.state.babels,comment:this.state.textarea,time:time,score:this.state.sco});
                 localStorage.setItem("a_"+this.state.id,JSON.stringify(arrays));
            }else if(this.state.type == "wanted"){
                array = array.concat({babels:this.state.babels,comment:this.state.textarea,time:time});
                localStorage.setItem("b_"+this.state.id,JSON.stringify(array));
            }
            
            
            this.props.history.push("/moreDetail/"+this.state.id)
        }
    }
    textChange (event) {
        this.setState({
            textarea: event.target.value
        },()=>{
            this.judgSure()
        })

    }
    babelChange (event) {
        let origin = this.state.origin;
        let babels = this.state.babels;
        let index = babels.indexOf(event.target.value);
        if(index == -1){
            babels = babels.concat(event.target.value);
            origin.map((item)=>{
                if(item.name == event.target.value){
                    item.choose = true;
                }
            })
        }else {
            babels.splice(index,1);
            origin.map((item)=>{
                if(item.name == event.target.value){
                    item.choose = false;
                }
            })
        }
        this.setState({
            origin: origin,
            babels: babels
        },()=>{
            this.judgSure();
        })
    }
    change (event) {
        this.setState({
            size: event.currentTarget.value.length * 2
        })
    }
    adding () {
        if(this.state.newOrAdd == true) {//为true时  点击添加一条
            let add = [{foucs:true,choose: true}];
            this.setState({
                add: add,
                newOrAdd: false
            },()=>{
                console.log(this.state.add)
            })
        }else {//当为false时  点击确定
            let origin = this.state.origin;
            origin = origin.concat({choose:true,name: this.inputRef.value});
            let babels = this.state.babels;
            babels = babels.concat(this.inputRif.value);
            this.setState({
                origin: origin,
                add:[],
                newOrAdd: true,
                sure: true,
                babels: babels
            })
        }
       
    } 
    judgSure () {
        if(this.state.textarea.length == 0 && this.state.babels.length == 0){
            this.setState({
                sure: false
            })
        }else {
            this.setState({
                sure: true
            })
        }
    }
    score (event) {
        let name = $(event.target).attr("name");
        let star = this.state.score;
        star.map((item,index)=>{
            if(name >= index){
                star[index] = true;
            }else {
                star[index] = false;
            }
        })
        this.setState({
            score: star,
            sco: name * 2
        })
    }
}
export default Wanted;