import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"
import rootReduser from "./../redusers/index"

const initialState={}
const Middleware=[thunk]

const store =createStore(
    rootReduser,
    initialState,
    compose(
        applyMiddleware(...Middleware)),
        window.__REDUX_DEVTOOLS__EXTENSION__&&Window.__REDUX_DEVTOOLS__EXTENSION__()
    )
export default store