import axios from 'axios';
import {bitcoinNewsApi} from "../../apis/newsApi";

export const GET_BUSINESS_NEWS = 'GET_BUSINESS_NEWS';
export const FAIL_GET_BUSINESS_NEWS = 'FAIL_GET_BUSINESS_NEWS';

export const GET_BUSINESS_BY_ID = 'GET_BUSINESS_BY_ID';

export const getBusinessNews = () => async dispatch => {
    try{
        const response = await axios.get(bitcoinNewsApi);
        dispatch({type: GET_BUSINESS_NEWS, payload: response.data.articles})
    }catch (e) {
        dispatch({type: FAIL_GET_BUSINESS_NEWS})
    }
};

export const getBusinessNewsById = (business) => {
    return{
        type: GET_BUSINESS_BY_ID,
        payload: business
    }
};
