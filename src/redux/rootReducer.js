import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
//reducers
import newsReducer from "./news/newsReducer";
import slideNewsReducer from "./slideNews/slideNewsReducer";


const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    news: newsReducer,
    slide: slideNewsReducer
});

export default persistReducer(persistConfig, rootReducer);
