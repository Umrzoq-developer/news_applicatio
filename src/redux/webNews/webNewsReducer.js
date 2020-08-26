import {GET_WEB_NEWS, FAIL_GET_WEB_NEWS, GET_WEB_BY_ID} from "./webNewsAction";


const initialState = {
    webNews: [],
    webById: [],
    error: false
};

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_WEB_NEWS:
            return{
                ...state,
                webNews: action.payload,
                error: false
            };
        case FAIL_GET_WEB_NEWS:
            return {
                ...state,
                error: true,
                webNews: []
            };
        case GET_WEB_BY_ID:
            return {
                ...state,
                webById: action.payload
            };
        default:
            return state
    }
}
