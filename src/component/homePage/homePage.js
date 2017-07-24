import React, {Component} from "react";
import Header from "../../common/header";
import ClassifyState from "../../common/classify"
<<<<<<< HEAD
=======

>>>>>>> 20f3fa95ed3f626b1be2c0320743a21ca5667b6d
class HomePage extends Component {
    render(){
        return (
            <div>
                <Header></Header>
<<<<<<< HEAD
                <ClassifyState name="即将上映" url="https://api.douban.com/v2/movie/in_theaters"></ClassifyState>
                <ClassifyState name="北美票房榜" url="https://api.douban.com/v2/movie/coming_soon"></ClassifyState>
                <ClassifyState name="Top250" url="https://api.douban.com/v2/movie/top250"></ClassifyState>
=======
                <ClassifyState name="即将上映" url="https://api.douban.com/v2/movie/coming_soon"></ClassifyState>
                <ClassifyState name="口碑榜" url="https://api.douban.com/v2/movie/in_theaters"></ClassifyState>
                
>>>>>>> 20f3fa95ed3f626b1be2c0320743a21ca5667b6d
            </div>
        )
    }
}
export default HomePage;