import React, {Component} from "react";
import logo from "../image/logo.svg"
import {Link} from "react-router-dom";
class HomePage extends Component {
    render(){
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.    
                </p>
                <SonComponent></SonComponent>
                <Son1Component></Son1Component>
            </div>
        )
    }
}
class SonComponent extends Component {
  render () {
    return (
        <div>
            <Link to="/page1">蜡笔小新  oh yeah!</Link>
        </div>
    )
  }
}
class Son1Component extends Component {
  render () {
    return (
        <div>
           <Link to="/page2">吃货的ee我</Link>
        </div>
    )
  }
}
export default HomePage;