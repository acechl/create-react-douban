webpackJsonp([4],{243:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n.n(r),c=n(27),l=n(246),u=n.n(l),p=n(247),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1,type:["\u7528\u5fae\u535a\u767b\u5f55","\u7528\u5fae\u4fe1\u767b\u5f55","\u7528\u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55","\u627e\u56de\u5bc6\u7801"],message:"",toast:!1,danger:!1,types:"password",hidden:!1},n}return o(t,e),f(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"register page"},i.a.createElement("div",{className:u()({toa:!this.state.toast,toastBox:this.state.toast})},i.a.createElement(p.a,{mes:this.state.message,danger:this.state.danger})),i.a.createElement("div",{className:"reHeader"},i.a.createElement("a",{className:"cancel",href:"javascript:;",onClick:this.cancel.bind(this)},"\u53d6\u6d88"),"\u767b\u5f55\u8c46\u74e3"),i.a.createElement("div",{className:"input"},i.a.createElement("div",{className:"userName"},i.a.createElement("input",{type:"text",placeholder:"\u90ae\u7bb1/\u624b\u673a\u53f7/\u7528\u6237\u540d",ref:"user"})),i.a.createElement("div",{className:"pass pr"},i.a.createElement("span",{onClick:this.change.bind(this),className:u()({eyes:!0,eyeShow:this.state.hidden,eyeHidden:!this.state.hidden})}),i.a.createElement("input",{type:this.state.types,placeholder:"\u5bc6\u7801",ref:"pass"})),i.a.createElement("button",{onClick:this.submitBtn.bind(this)},"\u767b\u5f55")),i.a.createElement("div",{className:"others",onClick:this.otherShow.bind(this)},"\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u767b\u5f55&\u627e\u56de\u5bc6\u7801"),i.a.createElement("div",{className:"login"},i.a.createElement(c.d,{to:"login",className:"loginDouban"},"\u6ce8\u518c\u8c46\u74e3\u8d26\u53f7"),i.a.createElement("span",{className:"download"},"\u4e0b\u8f7d\u8c46\u74e3App")),i.a.createElement("div",{className:u()({bg:!0,open:this.state.open})}),i.a.createElement("div",{className:u()({other:!0,open:this.state.open})},i.a.createElement("span",{onClick:this.closeBtn.bind(this)},"x"),i.a.createElement("ul",null,this.state.type.map(function(e,t){return i.a.createElement("li",{key:t},e)}))))}}]),f(t,[{key:"otherShow",value:function(){this.setState({open:!0})}},{key:"closeBtn",value:function(){this.setState({open:!1})}},{key:"submitBtn",value:function(){var e=this,t=this.refs.user.value,n=this.refs.pass.value,a=/^1[34578]\d{9}$/,s=localStorage.getItem("user"),o=localStorage.getItem("pass");0==t.length||0==n.length?this.setState({message:"\u8d26\u53f7\u6216\u8005\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",toast:!0,danger:!0},function(){setTimeout(function(){e.setState({toast:!1})},5e3)}):a.test(t)?t!=s?this.setState({message:"\u624b\u673a\u53f7\u7801\u6ca1\u6709\u6ce8\u518c",toast:!0,danger:!0},function(){setTimeout(function(){e.setState({toast:!1})},5e3)}):n!=o?this.setState({message:"\u5bc6\u7801\u4e0d\u6b63\u786e",toast:!0,danger:!0},function(){setTimeout(function(){e.setState({toast:!1})},5e3)}):this.setState({message:"\u767b\u5f55\u6210\u529f",toast:!0,danger:!1},function(){setTimeout(function(){e.props.history.push("/broadcast")},2e3)}):this.setState({message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801",toast:!0,danger:!0},function(){setTimeout(function(){e.setState({toast:!1})},5e3)})}},{key:"change",value:function(){var e=this;this.setState({hidden:!this.state.hidden},function(){e.state.hidden?e.setState({types:"text"}):e.setState({types:"password"})})}},{key:"cancel",value:function(){this.props.history.goBack()}}]),t}(r.Component);t.default=h},246:function(e,t,n){var a,s;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a))e.push(n.apply(null,a));else if("object"===s)for(var r in a)o.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(a=[],void 0!==(s=function(){return n}.apply(t,a))&&(e.exports=s))}()},247:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(5),i=n.n(r),c=n(246),l=n.n(c),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return o(t,e),u(t,[{key:"render",value:function(){return i.a.createElement("div",{className:l()({toast:!0,toastDanger:this.props.danger,toastOk:!this.props.danger})},this.props.mes)}}]),t}(r.Component);t.a=p}});
//# sourceMappingURL=4.01fb0670.js.map