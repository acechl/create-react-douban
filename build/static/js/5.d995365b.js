webpackJsonp([5],{241:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=n.n(o),c=n(247),u=n(246),l=n.n(u),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={message:"",toast:!1,danger:!1,types:"password",hidden:!1},n}return r(t,e),f(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"login"},i.a.createElement("div",{className:l()({toa:!this.state.toast,toastBox:this.state.toast})},i.a.createElement(c.a,{mes:this.state.message,danger:this.state.danger})),i.a.createElement("h2",null,"\u6b22\u8fce\u52a0\u5165\u8c46\u74e3"),i.a.createElement("div",{className:"input"},i.a.createElement("div",{className:"userName"},i.a.createElement("input",{type:"text",placeholder:"\u90ae\u7bb1/\u624b\u673a\u53f7",ref:"user"})),i.a.createElement("div",{className:"pass pr"},i.a.createElement("span",{className:l()({eyes:!0,eyeShow:this.state.hidden,eyeHidden:!this.state.hidden}),onClick:this.change.bind(this)}),i.a.createElement("input",{type:this.state.types,placeholder:"\u5bc6\u7801(\u6700\u5c116\u4f4d)",ref:"pass"})),i.a.createElement("div",{className:"nickName"},i.a.createElement("input",{type:"text",placeholder:"\u6635\u79f0",ref:"nick"})),i.a.createElement("button",{onClick:this.loginBtn.bind(this)},"\u6ce8\u518c")),i.a.createElement("div",{className:"tips"},"\u70b9\u51fb[\u4e0b\u4e00\u6b65]\u4ee3\u8868\u4f60\u5df2\u9605\u8bfb\u5e76\u540c\u610f\u7528\u6237\u4f7f\u7528\u534f\u8bae"),i.a.createElement("div",{className:"download"},"\u4e0b\u8f7d\u8c46\u74e3App"))}},{key:"loginBtn",value:function(){var e=this,t=this.refs.user.value,n=this.refs.pass.value,a=this.refs.nick.value,s=localStorage.getItem("user")||0,r=/^1[34578]\d{9}$/;0==t.length||0==n.length||0==a.length?this.setState({message:"\u8d26\u53f7\u3001\u5bc6\u7801\u6216\u8005\u6635\u79f0\u4e0d\u80fd\u4e3a\u7a7a",toast:!0,danger:!0},function(){setTimeout(function(){e.setState({toast:!1})},5e3)}):r.test(t)?n.length<6?this.setState({message:"\u5bc6\u7801\u5c11\u4e8e6\u4f4d",toast:!0,danger:!0},function(){setTimeout(function(){e.setState({toast:!1})},5e3)}):t==s?this.setState({message:"\u8be5\u624b\u673a\u53f7\u7801\u5df2\u6ce8\u518c",toast:!0,danger:!0},function(){setTimeout(function(){e.setState({toast:!1})},5e3)}):this.setState({message:"\u6ce8\u518c\u6210\u529f",toast:!0,danger:!1},function(){localStorage.setItem("user",t),localStorage.setItem("pass",n),localStorage.setItem("nick",a),setTimeout(function(){e.props.history.push("/broadcast")},2e3)}):this.setState({message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801",toast:!0,danger:!0},function(){setTimeout(function(){e.setState({toast:!1})},5e3)})}},{key:"change",value:function(){var e=this;this.setState({hidden:!this.state.hidden},function(){e.state.hidden?e.setState({types:"text"}):e.setState({types:"password"})})}}]),t}(o.Component);t.default=p},246:function(e,t,n){var a,s;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a))e.push(n.apply(null,a));else if("object"===s)for(var o in a)r.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(a=[],void 0!==(s=function(){return n}.apply(t,a))&&(e.exports=s))}()},247:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(5),i=n.n(o),c=n(246),u=n.n(c),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return r(t,e),l(t,[{key:"render",value:function(){return i.a.createElement("div",{className:u()({toast:!0,toastDanger:this.props.danger,toastOk:!this.props.danger})},this.props.mes)}}]),t}(o.Component);t.a=f}});
//# sourceMappingURL=5.d995365b.js.map