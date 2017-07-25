import {createStore,combineReducers} from "redux";
let defaultState= "who are you";
let login = null;
login  = (state = defaultState,action) => {
    switch (action.type) {
        case "loginTrue":
            return Object.assign({},state,{login:action.payload})
    }
}
let reducer = combineReducers({
    login
})
let store = createStore(reducer);
export default store;