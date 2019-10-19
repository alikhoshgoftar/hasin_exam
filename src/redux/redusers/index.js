import {combineReducers} from "redux";
import postReduser from "./postRedusers";

export default combineReducers({
    posts:postReduser
})