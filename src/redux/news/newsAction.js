import axios from 'axios';
import {newsApi} from "../../apis/newsApi";

export const BEGIN_GET_NEWS = 'BEGIN_GET_NEWS';
export const SUCCESS_GET_NEWS = 'SUCCESS_GET_NEWS';
export const FAIL_GET_NEWS = 'FAIL_GET_NEWS';

export const getNews = () => async dispatch => {
    dispatch({type:BEGIN_GET_NEWS});
    try{
        const response = await axios.get(newsApi);
        dispatch({type: SUCCESS_GET_NEWS, payload: response.data.sources})
    }catch (e) {
        dispatch({type: FAIL_GET_NEWS})
    }
};
