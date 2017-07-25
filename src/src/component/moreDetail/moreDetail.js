import React, {Component} from "react";
import {createStore} from "redux";
class MoreDetail extends Component{
    render () {
        return (
            <div>
                登录状态: <span>{this.state.login}</span>
            </div>
        )
    }
    getInitialState () {
        return {
            login: null
        }
    }
    componentWillMount () {
        let store = createStore();
        let listener = ()=>{
            this.setState({
                login: store.getState()
            })
        }
        store.subscribe(listener)
    }
    componentDidMount () {

    }
}
export default MoreDetail;