import React,{Component} from "react";
import cs from "classnames";
class Toast extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return (
            <div className={cs({
                "toast": true,
                "toastDanger": this.props.danger,
                "toastOk": !this.props.danger
            })}>
                {this.props.mes}
            </div>
        )
    }
}
export default Toast;