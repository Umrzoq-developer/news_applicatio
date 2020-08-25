import React from "react";
import {connect} from 'react-redux'
import {Typography} from "antd";
import {CardDetail} from "./NewsDetailStyle";
import {TextAuthor, TextDate, TextName} from "../SlideNewsDetail/SlideNewsDetailStyle";

const {Text, Title, Link} = Typography;

const NewsDetail = ({newById}) => {

    if (newById.length===0) {
        return null;
    }

    return(
        <CardDetail
            hoverable
            cover={<img alt={newById.id} src={newById.urlToImage} />}
        >
            {newById.author && <TextAuthor>{newById.author}</TextAuthor>}
            <Title>{newById.title}</Title>
            <Text style={{fontSize: '24px'}}>{newById.description}</Text>
            <TextDate>{newById.publishedAt.slice(0,10)}</TextDate>
            <TextName>{newById.name}</TextName>
            <Link href={newById.url} target='_blank'>For More Information: {newById.id}</Link>
        </CardDetail>
    )
};

const mapState = state => {
    return{
        newById: state.news.newById
    }
};

export default connect(mapState)(NewsDetail);

