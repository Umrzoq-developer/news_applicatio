import axios from 'axios';
import {usNewsApi} from "../../apis/newsApi";

export const GET_SLIDE_NEWS = 'GET_SLIDE_NEWS';
export const FAIL_SLIDE_NEWS = 'FAIL_SLIDE_NEWS';

export const GET_SLIDE_BY_ID = 'GET_SLIDE_BY_ID';

export const getSlideNews = () => async dispatch => {
    try {
        const response = await axios.get(usNewsApi);
        dispatch({type: GET_SLIDE_NEWS, payload: response.data.articles})
    }catch (e) {
        dispatch({type: FAIL_SLIDE_NEWS})
    }
};

export const getSlideNewsById = (news) => {
    return{
        type: GET_SLIDE_BY_ID,
        payload: news
    }
};
