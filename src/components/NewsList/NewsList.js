import React from "react";
import NewsListItem from "../NewsListItem/NewsListItem";
import {Skeleton} from 'antd';
//styling
import {NewsCol, NewsRow} from "./NewsListStyle";

const NewsList = ({news, loading}) => {
    return (
        <NewsRow gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {news.length > 0 ?
                (news.map(item => {
                        return (
                            <NewsCol className='gutter-row' key={item.id} span={5} offset={1}>
                                <NewsListItem {...item} loading={loading}/>
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
        </NewsRow>
    )
};

export default NewsList;
