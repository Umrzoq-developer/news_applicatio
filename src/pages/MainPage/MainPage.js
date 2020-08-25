import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {getNews} from "../../redux/news/newsAction";
import {getSlideNews} from "../../redux/slideNews/slideNewsAction";
//components
import CarouselSide from "../../components/CarouselSide/CarouselSide";
import NewsList from "../../components/NewsList/NewsList";
//styling
import {CarouselDiv, NewsDiv} from "./MainPageStyle";
import {Typography} from "antd";
const {Text} = Typography;


const MainPage = ({loading, error, news, getNews, getSlideNews}) => {

    useEffect(() => {
        getNews();
        getSlideNews();
    }, [getNews, getSlideNews]);


    return(
        <div>
            <CarouselDiv>
                <CarouselSide />
            </CarouselDiv>
            <Text style={{fontFamily: 'Roboto', marginLeft: '45vw', fontSize: '26px'}}>News</Text>
            <NewsDiv>
                <NewsList
                    news={news}
                    loading={loading}
                />
            </NewsDiv>
            {error && <Text type='danger'>There is not any List</Text>}
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


export default connect(mapState, {getNews, getSlideNews})(MainPage);
