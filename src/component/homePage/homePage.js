import React, {Component} from "react";
// import {Link} from "react-router-dom";
import Header from "../../common/header";
import Classify from "../../common/classify"
class HomePage extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <Classify name="即将上映"></Classify>
                <Classify name="北美票房榜"></Classify>
                <Classify name="新片榜"></Classify>
            </div>
        )
    }
}
export default HomePage;