import React, {useState} from "react";
import {connect} from 'react-redux';
import {BusinessNewsRow, NewsCol, PaginationDiv} from "./BusinessNewsListStyle";

import {Pagination, Skeleton} from "antd";
import BusinessNewsListItem from "../BusinessNewsListItem/BusinessNewsListItem";

const BusinessNewsList = ({businessNews, error}) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(6);

    const handlePageClick = (value) => {
        setMinValue((value - 1) * 6);
        setMaxValue(value * 6);
    };

    if (error) {
        return <p>There is not any News</p>
    }

    return (
        <BusinessNewsRow>
            {(businessNews.length > 0) ?
                (businessNews.slice(minValue, maxValue).map((item, id) => {
                        return (
                            <NewsCol className='gutter-row' key={id} span={6} offset={1}>
                                <BusinessNewsListItem {...item}/>
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
                    total={businessNews.length}
                />
            </PaginationDiv>

        </BusinessNewsRow>
    )
};

const mapState = state => {
    return {
        businessNews: state.business.businessNews,
        error: state.business.error
    }
};


export default connect(mapState)(BusinessNewsList);
