import React from "react";
import {connect} from 'react-redux';
import {useHistory} from "react-router-dom";
import {Card, Typography} from "antd";
import {CalendarOutlined} from "@ant-design/icons";
import {AboutButton} from "../NewsListItem/NewsListItemStyle";

import {getBusinessNewsById} from "../../redux/bitcoinNews/bitcoinNewsAction";

const {Meta} = Card;
const {Text} = Typography;

const BusinessNewsListItem = ({author, source, title, description, url, urlToImage, publishedAt, content, getBusinessNewsById }) => {

    const history = useHistory();

    const handleDetail = (id) => {
        getBusinessNewsById({id: source.id, name: source.name, url, author, publishedAt, title, content, description, urlToImage});
        history.push(`/business/news/${id}`)
    };

    return (
        <Card
            bordered
            hoverable
            cover={<img alt={source.id} src={urlToImage} />}
            actions={[
                <Text key={author} mark> {author}</Text>,
                <Text key={publishedAt} type='danger'> <CalendarOutlined/> {publishedAt.slice(0, 10)}</Text>
            ]}
        >
            <Meta style={{height: '200px'}} title={source.name} description={content}/>
            <AboutButton onClick={() => handleDetail(source.id)} type='primary'>More...</AboutButton>
        </Card>
    )
};


export default connect(null, {getBusinessNewsById})(BusinessNewsListItem);
