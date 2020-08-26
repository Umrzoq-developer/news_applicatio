import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Typography} from "antd";

//action
import {getWebNews} from "../../redux/webNews/webNewsAction";
import GeneralList from "../../components/GeneralList/GeneralList";

const {Title} = Typography;


const GeneralPage = ({getWebNews}) => {

    useEffect(() => {
        getWebNews();
    }, [getWebNews]);

    return(
        <div style={{marginTop: '100px'}} >
            <Title style={{textAlign: 'center'}} mark>General Page</Title>
            <GeneralList/>
        </div>
    )
};

export default connect(null, {getWebNews})(GeneralPage)
