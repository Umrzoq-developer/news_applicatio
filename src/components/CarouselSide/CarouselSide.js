import React from "react";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, Carousel, Skeleton, Typography} from "antd";
import {CarouselItem, CarouselTitle} from "./CarouselSideStyle";

//action
import {getSlideNewsById} from "../../redux/slideNews/slideNewsAction";

const {Text} = Typography;

const CarouselSide = ({error, slideNews, getSlideNewsById}) => {

    const history = useHistory();

    const handleDetail = (id, news) => {
        getSlideNewsById(news);
        history.push(`/news/slide/${id}`)
    };

    if (error) {
        return (
            <Text style={{marginLeft: '50vw'}} mark>There is not any data</Text>
        )
    }

    if (slideNews.length === 0) {
        return (
            <div>
                <Skeleton loading={true} active/>
                <Skeleton loading={true} active/>
                <Skeleton loading={true} active/>
            </div>
        )
    }

    return (
        <Carousel autoplay effect='fade'>
            {slideNews.length > 0 && slideNews.map(slide => {
                if (slide.urlToImage === null || slide.source.id === null) {
                    return null;
                }

                return (
                    <div key={slide.source.id}>
                        <CarouselItem urlToImg={slide.urlToImage}>
                            <CarouselTitle mark>
                                {slide.title}
                            </CarouselTitle>
                            <Button style={{marginRight: '100%', marginTop: '15%'}} type='primary' onClick={() => handleDetail(slide.source.id, slide)}>
                                See more
                            </Button>
                        </CarouselItem>
                    </div>
                )
            })}
        </Carousel>
    )
};

const mapState = state => {
    return {
        error: state.slide.error,
        slideNews: state.slide.slideNews
    }
};

export default connect(mapState, {getSlideNewsById})(CarouselSide);
