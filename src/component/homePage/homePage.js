import React, {Component} from "react";
// import {Link} from "react-router-dom";
import Header from "../../common/header";
import ClassifyState from "../../common/classify"
class HomePage extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <ClassifyState name="即将上映" url="https://api.douban.com/v2/movie/in_theaters"></ClassifyState>
                <ClassifyState name="北美票房榜" url="https://api.douban.com/v2/movie/coming_soon"></ClassifyState>
                <ClassifyState name="Top250" url="https://api.douban.com/v2/movie/top250"></ClassifyState>
            </div>
        )
    }
}
export default HomePage;