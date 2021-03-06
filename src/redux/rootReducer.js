import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
//reducers
import newsReducer from "./news/newsReducer";
import slideNewsReducer from "./slideNews/slideNewsReducer";
import bitCoinNewsReducer from "./bitcoinNews/bitCoinNewsReducer";
import webNewsReducer from "./webNews/webNewsReducer";


const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    news: newsReducer,
    slide: slideNewsReducer,
    business: bitCoinNewsReducer,
    web: webNewsReducer,
});

export default persistReducer(persistConfig, rootReducer);
