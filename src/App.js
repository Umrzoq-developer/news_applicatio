import React from "react";
import {Switch, Route} from 'react-router-dom';

//components
import HeaderMain from "./components/Header/Header";

//pages
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
    return (
        <div>
            <HeaderMain/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
            </Switch>
        </div>
    )
};

export default App;
