import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {getNews} from "../../redux/news/newsAction";
import NewsList from "../../components/NewsList/NewsList";
//styling
import {NewsDiv} from "./MainPageStyle";

const MainPage = ({loading, error, news, getNews}) => {

    useEffect(() => {
        getNews();
    }, [getNews]);


    return(
        <div>
            {error && <p>There is an error</p>}
            <NewsDiv>
                <NewsList
                    news={news}
                    loading={loading}
                />
            </NewsDiv>
        </div>
    )
};

const mapState = state => {
    return {
        news: state.news.news,
        loading: state.news.loading,
        error: state.news.error,
        newById: state.news.newById
    }
};


export default connect(mapState, {getNews})(MainPage);
