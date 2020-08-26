import React from "react";
import {connect} from 'react-redux';
import {Typography} from "antd";
import {CardDetail} from "../BusinessDetailPage/BusinessDetailStyle";
import {TextAuthor, TextDate, TextName} from "../SlideNewsDetail/SlideNewsDetailStyle";

const {Text, Title, Link} = Typography;

const GeneralDetailPage = ({webById}) => {

    if (webById.length === 0){
        return null
    }

    return(
        <CardDetail
            hoverable
            cover={<img alt={webById.id} src={webById.urlToImage} />}
        >
            {webById.author && <TextAuthor>{webById.author}</TextAuthor>}
            <Title>{webById.title}</Title>
            <Text style={{fontSize: '24px'}}>{webById.description}</Text>
            <TextDate>{webById.publishedAt.slice(0,10)}</TextDate>
            <TextName>{webById.name}</TextName>
            <Link href={webById.url} target='_blank'>For More Information: {webById.id}</Link>
        </CardDetail>
    )
};

const mapState = state => {
    return{
        webById: state.web.webById
    }
};

export default  connect(mapState)(GeneralDetailPage);
