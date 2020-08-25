import React from "react";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Card, Typography} from 'antd';
import {AboutButton} from "./NewsListItemStyle";
import {CalendarOutlined} from '@ant-design/icons';
import {getNewsById} from "../../redux/news/newsAction";

const {Meta} = Card;
const {Text} = Typography;

const NewsListItem = ({source, url, author, description, publishedAt, title, urlToImage, content, getNewsById}) => {

    const history = useHistory();

    const handleDetail = (id) => {
        getNewsById({id: source.id, name: source.name, url, author, publishedAt, title, content, description, urlToImage});
        history.push(`/news/${id}`)
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
            <Meta style={{height: '200px'}} title={source.name} description={url}/>
            <AboutButton onClick={() => handleDetail(source.id)} type='primary'>More...</AboutButton>
        </Card>
    )
};


export default connect(null, {getNewsById})(NewsListItem);
