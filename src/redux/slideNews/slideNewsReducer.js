import {FAIL_SLIDE_NEWS, GET_SLIDE_BY_ID, GET_SLIDE_NEWS} from "./slideNewsAction";

const initialState = {
    error: null,
    slideNews: [],
    SlideNewById: []
};

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_SLIDE_NEWS:
            return {
                ...state,
                slideNews: action.payload,
                error: null
            };
        case FAIL_SLIDE_NEWS:
            return {
                ...state,
                error: true,
                slideNews: []
            };
        case GET_SLIDE_BY_ID:
            return {
                ...state,
                SlideNewById: action.payload
            };
        default:
            return state
    }
}
