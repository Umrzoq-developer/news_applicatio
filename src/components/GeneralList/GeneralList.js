import React, {useState} from "react";
import {connect} from 'react-redux';
import { PaginationDiv, WebNewsRow, NewsCol } from './GeneralListStyle'

import {Pagination, Skeleton} from "antd";
import GeneralNewsListItem from "../GeneralListItem/GenreralListItem";


const GeneralList = ({webNews, error}) => {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(6);

    const handlePageClick = (value) => {
        setMinValue((value - 1) * 6);
        setMaxValue(value * 6);
    };

    if (error) {
        return <p>There is not any News</p>
    }

    return(
        <WebNewsRow>
            {(webNews.length > 0) ?
                (webNews.slice(minValue, maxValue).map((item, id) => {
                        return (
                            <NewsCol className='gutter-row' key={id} span={6} offset={1}>
                                <GeneralNewsListItem {...item}/>
                            </NewsCol>
                        )
                    }
                )) : (
                    <>
                        <Skeleton loading={true} active/>
                        <Skeleton loading={true} active/>
                        <Skeleton loading={true} active/>
                    </>
                )
            }
            <PaginationDiv>
                <Pagination
                    pageSize={6}
                    defaultCurrent={1}
                    defaultPageSize={6}
                    onChange={handlePageClick}
                    total={webNews.length}
                />
            </PaginationDiv>

        </WebNewsRow>
    )
};

const mapState = (state) => {
    return{
        webNews: state.web.webNews,
        error: state.web.error
    }
};

export default connect(mapState)(GeneralList)
