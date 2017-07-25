import React, {Component} from "react";
import Header from "../../common/header";
import ClassifyState from "../../common/classify";
import {Link} from "react-router-dom";
class HomePage extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <ClassifyState name="即将上映" url="https://api.douban.com/v2/movie/in_theaters" endX="0" targetX = "0" ></ClassifyState>
                <ClassifyState name="北美票房榜" url="https://api.douban.com/v2/movie/coming_soon" endX="0" targetX = "0"></ClassifyState>
                <ClassifyState name="Top250" url="https://api.douban.com/v2/movie/top250" endX="0" targetX = "0"></ClassifyState>
                <div class="found">
                    <h6>发现好电影</h6>
                    <ul>
                        <li>
                            <a href="#">同时入选IMD250和豆瓣电影250的电影</a>
                        </li>
                        <li>
                            <a href="#">带你进入不正常的世界</a>
                        </li>
                        <li>
                            <a href="#">用点【影】来祭奠逝去的岁月</a>
                        </li>
                        <li>
                            <a href="#">女孩们的故事【电影】</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">科幻是未来的钥匙--科幻启示录【科幻题材】</a>
                        </li>
                        <li>
                            <a href="#">美国生活面面观</a>
                        </li>
                        <li>
                            <a href="#">2015终极期待</a>
                        </li>
                        <li>
                            <a href="#">经典韩国电影--收集100部</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default HomePage;