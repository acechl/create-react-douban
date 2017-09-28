import React, {Component} from "react";
import cs from "classnames"
class Babel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            choose: false,
            origin:[],
        }
    }
    render () {
        return (
            <div className="babel">
                <div className="be">
                    <p>打标签</p>
                    <ul className="clearfix">
                        {
                            this.props.babel.map((item,index)=>{
                                return (
                                    <li className={cs({
                                        "fl": true,
                                        "input": true,
                                    })} onClick={this.props.babelChange} key={index}>
                                        <input value = {item.name} type="text" className={cs({
                                            "choose":item.choose,
                                            "unchoose":!item.choose
                                        })} size={item.name.length * 2} disabled/>
                                    </li>
                                )
                            })
                        }
                        {
                            this.props.add.map((item,index)=>{
                                return (
                                    <li className="fl input" key={index}>
                                        <input autoFocus="autofocus" ref="input" className="choose" type="text" size={this.props.size} onChange={this.props.inputChange} ref={this.props.inputRef}/>
                                    </li>
                                )
                            })
                        }
                        <li className="fl unchoose" onClick={this.props.adding}>+</li>
                    </ul>
                </div>
                <div className="com">
                    <p>写短评</p>
                    <textarea value={this.props.text} onChange={this.props.textChange}></textarea>
                </div>

            </div>
        )
    }
}
export default Babel;