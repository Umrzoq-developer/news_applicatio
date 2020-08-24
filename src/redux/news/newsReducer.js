import {BEGIN_GET_NEWS, FAIL_GET_NEWS, SUCCESS_GET_NEWS} from "./newsAction";

const initialState = {
    loading: false,
    error: null,
    news: []
};

export default (state=initialState, action) => {
    switch (action.type) {
        case BEGIN_GET_NEWS:
            return {
                ...state,
                error: null,
                loading: true
            };
        case SUCCESS_GET_NEWS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: null
            };
        case FAIL_GET_NEWS:
            return {
                ...state,
                loading: false,
                news: [],
                error: true
            };
        default:
            return state
    }
}
