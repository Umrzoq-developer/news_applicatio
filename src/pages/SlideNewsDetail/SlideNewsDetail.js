import React from "react";
import {connect} from 'react-redux'
import {Typography} from "antd";
import {CardDetail, TextAuthor, TextDate, TextName} from "./SlideNewsDetailStyle";

const {Text, Link, Title} = Typography;

const SlideNewsDetail = ({SlideNewById}) => {
    console.log(SlideNewById);


    return(
        <CardDetail
            hoverable
            cover={<img alt={SlideNewById.source.id} src={SlideNewById.urlToImage} />}
        >
            {SlideNewById.author && <TextAuthor>{SlideNewById.author}</TextAuthor>}
            <Title>{SlideNewById.title}</Title>
            <Text style={{fontSize: '24px'}}>{SlideNewById.description}</Text>
            <TextDate>{SlideNewById.publishedAt.slice(0,10)}</TextDate>
            <TextName>{SlideNewById.source.name}</TextName>
            <Link href={SlideNewById.url} target='_blank'>For More Information: {SlideNewById.source.id}</Link>
        </CardDetail>
    )
};

const mapState = state => {
    return{
        SlideNewById: state.slide.SlideNewById
    }
};

export default connect(mapState)(SlideNewsDetail);

