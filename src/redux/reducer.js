import {combineReducers} from "redux";
//reducers
import newsReducer from "./news/newsReducer";


export const rootReducer = combineReducers({
    news: newsReducer
});
