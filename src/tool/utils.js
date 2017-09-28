let substr = function (str) {
    return str.substr(0,88)+"...";
}
let subTitle = function (str) {
    console.log(str);
    let index = str.indexOf("/");
    return str.substr(0,index);
}
let formatTime = function (fmt) {
    function add0(m){return m<10?'0'+m:m }
    var time = new Date(fmt);
	var y = time.getFullYear();
	var m = time.getMonth()+1;
	var d = time.getDate();
	var h = time.getHours();
	var mm = time.getMinutes();
	var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}
export default {
    substr,
    subTitle,
    formatTime
}