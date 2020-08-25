import React from "react";
import {connect} from 'react-redux';
import {CardDetail} from "./BusinessDetailStyle";
import {Typography} from "antd";
import {TextAuthor, TextDate, TextName} from "../SlideNewsDetail/SlideNewsDetailStyle";

const {Text, Title, Link} = Typography;

const BusinessDetailPage = ({businessById}) => {
    if (businessById.length === 0){
        return null
    }

    return(
        <CardDetail
            hoverable
            cover={<img alt={businessById.id} src={businessById.urlToImage} />}
        >
            {businessById.author && <TextAuthor>{businessById.author}</TextAuthor>}
            <Title>{businessById.title}</Title>
            <Text style={{fontSize: '24px'}}>{businessById.description}</Text>
            <TextDate>{businessById.publishedAt.slice(0,10)}</TextDate>
            <TextName>{businessById.name}</TextName>
            <Link href={businessById.url} target='_blank'>For More Information: {businessById.id}</Link>
        </CardDetail>
    )
};

const mapState = state => {
    return{
        businessById: state.business.businessById
    }
};

export default connect(mapState)(BusinessDetailPage);
