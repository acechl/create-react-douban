import React,{Component} from "react";
import "../index.less"
class Callback extends Component {
    render () {
        return (
            <div className="callback">
                <div className="clearfix">
                    <p>{this.props.name}</p>
                    <div className="fr">
                        <button>极速下载</button>
                        <button>打开</button>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Callback;