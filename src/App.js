import React, { Component } from 'react';
import './App.css';
import Header from './common/header';
import {createStore} from "redux";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      {this.props.children}
      </div>
      
      
    );
  }
  componentWillMount () {
    let store = createStore(reducer);
    let newState;
    let reducer = (state,action)=>{
      switch (action.type) {
        case "loginTrue":
          state = true;
          return {...state,...newState}
      }
    }
  }
}


export default App;
