import React from "react";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Card, Typography} from 'antd';
import {AboutButton} from "./NewsListItemStyle";
import {FlagFilled, GlobalOutlined} from '@ant-design/icons';
import {getNewsById} from "../../redux/news/newsAction";

const {Meta} = Card;
const {Text} = Typography;

const NewsListItem = ({id, name, url, category, language, country, description, getNewsById}) => {

    const history = useHistory();

    const handleDetail = (id) => {
        getNewsById({id, name, url, category, language, country, description});
        history.push(`/news/${id}`)
    };

    return (
        <Card
            bordered
            hoverable
            actions={[
                <Text key={category} mark> {category}</Text>,
                <Text key={language} type='success'> <GlobalOutlined/> {language}</Text>,
                <Text key={country} type='danger'> <FlagFilled/> {country}</Text>
            ]}
        >
            <Meta style={{height: '200px'}} title={name} description={url}/>
            <AboutButton onClick={() => handleDetail(id)} type='primary'>More...</AboutButton>
        </Card>
    )
};


export default connect(null, {getNewsById})(NewsListItem);
