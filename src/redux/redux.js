import {createStore,combineReducers} from "redux";
let defaultState= "who are you";
let login  = (state = defaultState,action) => {
    switch (action.type) {
        case "loginTrue":
            return Object.assign({},state,{login:action.payload})
    }
}
//reducer函数是传入createStore中的参数  在store收到action后 需要提供一个新的store
let reducer = combineReducers({
    login
})
//Store是保存数据的地方  你可以看成是一个容器 但是一个应用只能有一个Store store通过函数createStore传入reducer函数生成  store可以用store.getState()来获取当前时刻的State  疑问1：用store.getState()获取的 是否是获取store所有的数据？？
let store = createStore(reducer);
export default store;