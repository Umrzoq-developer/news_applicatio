import React, {useState} from "react";
import NewsListItem from "../NewsListItem/NewsListItem";
import {Pagination, Skeleton} from 'antd';
//styling
import {NewsCol, NewsRow, PaginationDiv} from "./NewsListStyle";

const NewsList = ({news, loading}) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(12);

    const handlePageClick = (value) => {
        setMinValue((value-1)*12);
        setMaxValue(value*12);
    };

    return (
        <NewsRow gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {(news.length > 0 || loading) ?
                (news.slice(minValue, maxValue).map(item => {
                        return (
                            <NewsCol className='gutter-row' key={item.id} span={5} offset={1}>
                                <NewsListItem {...item}/>
                            </NewsCol>
                        )
                    }
                )) : (
                    <>
                        <Skeleton loading={true} active />
                        <Skeleton loading={true} active />
                        <Skeleton loading={true} active />
                    </>
                )
            }
            <PaginationDiv>
                <Pagination
                    pageSize={12}
                    defaultCurrent={1}
                    defaultPageSize={12}
                    onChange={handlePageClick}
                    total={news.length}
                />
            </PaginationDiv>

        </NewsRow>
    )
};

export default NewsList;
