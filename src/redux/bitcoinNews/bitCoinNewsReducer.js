import {GET_BUSINESS_NEWS, FAIL_GET_BUSINESS_NEWS, GET_BUSINESS_BY_ID} from "./bitcoinNewsAction";

const initialState = {
    businessNews: [],
    businessById: [],
    error: false
};

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_BUSINESS_NEWS:
            return{
                ...state,
                businessNews: action.payload,
                error: false
            };
        case FAIL_GET_BUSINESS_NEWS:
            return {
                ...state,
                error: true,
                businessNews: []
            };
        case GET_BUSINESS_BY_ID:
            return {
                ...state,
                businessById: action.payload
            };
        default:
            return state
    }
}
