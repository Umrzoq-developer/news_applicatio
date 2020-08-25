import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Typography} from "antd";
import BusinessNewsList from "../../components/BusinessNewsList/BusinessNewsList";

//action
import {getBusinessNews} from "../../redux/bitcoinNews/bitcoinNewsAction";

const {Title} = Typography;

const BusinessPage = ({getBusinessNews}) => {

    useEffect(() => {
        getBusinessNews();
    }, [getBusinessNews]);

    return(
        <div style={{marginTop: '100px', marginRight: 0}}>
            <Title style={{textAlign: 'center'}} mark>Business Page</Title>
            <BusinessNewsList/>
        </div>
    )
};

export default connect(null, {getBusinessNews})(BusinessPage)
