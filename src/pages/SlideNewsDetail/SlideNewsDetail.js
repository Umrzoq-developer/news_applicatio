import React from "react";
import {connect} from 'react-redux'
import {Typography} from "antd";
import {CardDetail} from "./SlideNewsDetailStyle";

const {Text, Title} = Typography;

const SlideNewsDetail = ({SlideNewById}) => {
    console.log(SlideNewById);


    return(
        <CardDetail
            hoverable
        >
            <Title>{SlideNewById.title}</Title>
            <Text>{SlideNewById.description}</Text>
            <Text>{SlideNewById.url}</Text>
        </CardDetail>
    )
};

const mapState = state => {
    return{
        SlideNewById: state.slide.SlideNewById
    }
};

export default connect(mapState)(SlideNewsDetail);

