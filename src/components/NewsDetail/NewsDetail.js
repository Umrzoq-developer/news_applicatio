import React from "react";
import {connect} from 'react-redux'
import {Typography} from "antd";
import {CardDetail} from "./NewsDetailStyle";

const {Text, Title} = Typography;

const NewsDetail = ({newById}) => {

    return(
        <CardDetail
            hoverable
        >
            <Title>{newById.name}</Title>
            <Text>{newById.description}</Text>
            <Text>{newById.url}</Text>
        </CardDetail>
    )
};

const mapState = state => {
    return{
        newById: state.news.newById
    }
};

export default connect(mapState)(NewsDetail);

