import React from "react";
import {Switch, Route} from 'react-router-dom';

//components
import HeaderMain from "./components/Header/Header";

//pages
import MainPage from "./pages/MainPage/MainPage";
import NewsDetail from "./components/NewsDetail/NewsDetail";

const App = () => {
    return (
        <div>
            <HeaderMain/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/news/:id' component={NewsDetail}/>
            </Switch>
        </div>
    )
};

export default App;
