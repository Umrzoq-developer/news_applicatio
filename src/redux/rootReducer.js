import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
//reducers
import newsReducer from "./news/newsReducer";


const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    news: newsReducer
});

export default persistReducer(persistConfig, rootReducer);
