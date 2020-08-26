import axios from 'axios';
import {webNewsApi} from "../../apis/newsApi";

export const GET_WEB_NEWS = 'GET_BUSINESS_NEWS';
export const FAIL_GET_WEB_NEWS = 'FAIL_GET_BUSINESS_NEWS';

export const GET_WEB_BY_ID = 'GET_BUSINESS_BY_ID';

export const getWebNews = () => async dispatch => {
    try{
        const response = await axios.get(webNewsApi);
        dispatch({type: GET_WEB_NEWS, payload: response.data.articles})
    }catch (e) {
        dispatch({type: FAIL_GET_WEB_NEWS})
    }
};

export const getWebNewsById = (business) => {
    return{
        type: GET_WEB_BY_ID,
        payload: business
    }
};
