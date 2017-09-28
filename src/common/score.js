import React,{Component} from "react";
import cs from "classnames";
class Score extends Component {
    constructor (props) {
        super(props);
        this.state = {
            empty: true
        }
    }
    render () {
        return (
                <span className={cs({
                    "empty": !this.props.star,
                    "full": this.props.star
                })} name={this.props.name} onClick={this.props.scoring}>
                </span>
        )
    }
}
export default Score;