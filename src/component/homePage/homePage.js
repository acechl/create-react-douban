import React, {Component} from "react";
import Header from "../../common/header";
import ClassifyState from "../../common/classify"

class HomePage extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <ClassifyState name="即将上映" url="https://api.douban.com/v2/movie/coming_soon"></ClassifyState>
                <ClassifyState name="口碑榜" url="https://api.douban.com/v2/movie/in_theaters"></ClassifyState>
                
            </div>
        )
    }
}
export default HomePage;