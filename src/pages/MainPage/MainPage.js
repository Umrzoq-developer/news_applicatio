import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {getNews} from "../../redux/news/newsAction";

const MainPage = ({loading, error, news, getNews}) => {

    useEffect(() => {
        getNews()
    }, [getNews]);


    return(
        <div>
            Main Page
            {loading && <p>Loading...</p>}
            {error && <p>There is an error</p>}
        </div>
    )
};

const mapState = state => {
    return {
        news: state.news.news,
        loading: state.news.loading,
        error: state.news.error
    }
};


export default connect(mapState, {getNews})(MainPage);
