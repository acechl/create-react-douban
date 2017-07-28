import React, {Component} from "react";
class Book extends Component {
    render () {
        return (
            <div>
                this is page book;
            </div>
        )
    }
    componentWillMount () {
        fetch("https://api.douban.com/v2/book/1220562",{
            mode:"cors",
            method:"POST",
            credentials:"include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"
            },
            cache:"default"
        })
        .then((response)=>{
            console.log(response)
            // return response.json();
        // }).then(function(res){
        //     console.log(res);
        })
    }
}
export default Book;