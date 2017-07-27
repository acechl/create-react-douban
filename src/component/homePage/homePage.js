import React, {Component} from "react";
import Header from "../../common/header";
import ClassifyState from "../../common/classify";
import Footer from "../../common/footer";
class HomePage extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <ClassifyState name="即将上映" url="https://api.douban.com/v2/movie/in_theaters" ></ClassifyState>
                <ClassifyState name="北美票房榜" url="https://api.douban.com/v2/movie/coming_soon" ></ClassifyState>
                <ClassifyState name="Top250" url="https://api.douban.com/v2/movie/top250"></ClassifyState>
                <div className="found">
                    <h6>发现好电影</h6>
                    <div onTouchStart={this.touchStart
                        } onTouchMove={this.touchMove} onTouchEnd={this.touchEnd}>
                            <ul className="" ref="first">
                            <li ref="firstList">
                                <a href="#" className="green">同时入选IMD250和豆瓣电影250的电影</a>
                            </li>
                            <li ref="firstList">
                                <a href="#" className="red">带你进入不正常的世界</a>
                            </li>
                            <li ref="firstList">
                                <a href="#" className="organe">用点【影】来祭奠逝去的岁月</a>
                            </li>
                            <li ref="firstList">
                                <a href="#" className="lightRed">女孩们的故事【电影】</a>
                            </li>
                            <li className="block"></li>
                            <li ref="secondList">
                                <a href="#" className="blue">科幻是未来的钥匙--科幻启示录【科幻题材】</a>
                            </li>
                            <li ref="secondList">
                                <a href="#" className="lightGreen">美国生活面面观</a>
                            </li>
                            <li ref="secondList">
                                <a href="#" className="lightorgane">2015终极期待</a>
                            </li>
                            <li ref="secondList">
                                <a href="#" className="lightBlue">经典韩国电影--收集100部</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ClassifyShow">
                    <h6>分类浏览</h6>
                    <ul>
                        <li>
                            <a href="#">经典 <span>></span></a>
                        </li>
                         <li>
                            <a href="#">冷门佳片<span>></span></a>
                        </li>
                         <li>
                            <a href="#">豆瓣高分<span>></span></a>
                        </li>
                         <li>
                            <a href="#">动作<span>></span></a>
                        </li>
                         <li>
                            <a href="#">喜剧<span>></span></a>
                        </li>
                         <li>
                            <a href="#">爱情<span>></span></a>
                        </li>
                         <li>
                            <a href="#">悬疑<span>></span></a>
                        </li>
                         <li>
                            <a href="#">恐怖<span>></span></a>
                        </li>
                         <li>
                            <a href="#">科幻<span>></span></a>
                        </li>
                         <li>
                            <a href="#">治愈<span>></span></a>
                        </li>
                         <li>
                            <a href="#">文艺<span>></span></a>
                        </li>
                         <li>
                            <a href="#">成长<span>></span></a>
                        </li>
                         <li>
                            <a href="#">动画<span>></span></a>
                        </li>
                         <li>
                            <a href="#">华语<span>></span></a>
                        </li>
                         <li>
                            <a href="#">欧美<span>></span></a>
                        </li>
                         <li>
                            <a href="#">韩国<span>></span></a>
                        </li>
                         <li>
                            <a href="#">日本<span>></span></a>
                        </li>
                        <li><a href="#">泰国<span>></span></a></li>
                    </ul>
                </div>
                <Footer value="我们的精神角落"></Footer>
            </div>
        )
    }
    touchStart (event) {

    }
    touchMove (event) {

    }
    touchEnd (event) {

    }
    componentDidMount () {
        console.log(this.refs.firstList);
    }
}
export default HomePage;