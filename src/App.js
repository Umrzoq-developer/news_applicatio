import React from "react";
import {Switch, Route} from 'react-router-dom';

//components
import HeaderMain from "./components/Header/Header";

//pages
import MainPage from "./pages/MainPage/MainPage";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import SlideNewsDetail from "./pages/SlideNewsDetail/SlideNewsDetail";

const App = () => {
    return (
        <div>
            <HeaderMain/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/news/:id' component={NewsDetail}/>
                <Route exact path='/news/slide/:id' component={SlideNewsDetail}/>
            </Switch>
        </div>
    )
};

export default App;
