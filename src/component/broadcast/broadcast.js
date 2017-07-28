import React, {Component} from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import {Link} from "react-router-dom";
class Broadcast extends Component {
    render () {
        return (
            <div className="broadcast">
                <Header></Header>
                <div className="callback">
                    <div className="clearfix">
                        <p>打开App,回复广播</p>
                        <div className="fr">
                            <button>极速下载</button>
                            <button>打开</button>
                        </div>
                    </div>
                </div>
                <div className="share clearfix">
                    <div>
                        <Link to="broadcast/publicBroadcast" className="clearfix">
                        <div className="fl">
                            <span></span>
                            <span>分享生活点滴...</span>
                        </div>
                        <div className="fr">
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                    </div>
                    
                </div>
                <div className="comment"></div>
                <Footer value="在App中刷广播更愉快"></Footer>
            </div>
        )
    }
}
export default Broadcast;