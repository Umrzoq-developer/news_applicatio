import React from "react";
import {Link} from "react-router-dom";
//styling
import {Menu, Layout} from "antd";
import {HeaderBrand} from './HeaderStyle';

const {Header} = Layout;

const HeaderMain = () => {
    return (
        <Header style={{display: 'flex', flexDirection: 'row'}}>
            <HeaderBrand>News Application</HeaderBrand>
            <Menu style={{width: '70%'}} theme='dark' mode="horizontal">
                <Menu.Item key="0">
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to='/business'>
                        Business
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/general'>
                        General
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/sports'>
                        Sports
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
};

export default HeaderMain;
