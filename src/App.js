import React from "react";
import {Switch, Route} from 'react-router-dom';

//components
import HeaderMain from "./components/Header/Header";

//pages
import MainPage from "./pages/MainPage/MainPage";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import SlideNewsDetail from "./pages/SlideNewsDetail/SlideNewsDetail";
import BusinessPage from "./pages/BusinessPage/BusinessPage";
import GeneralPage from "./pages/GeneralPage/GeneralPage";
import BusinessDetailPage from "./pages/BusinessDetailPage/BusinessDetailPage";
import GeneralDetailPage from "./pages/GeneralDetailPage/GeneralDetailPage";

const App = () => {
    return (
        <div>
            <HeaderMain/>
            <Switch>
                {/*MainPageSide*/}
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/news/:id' component={NewsDetail}/>
                <Route exact path='/news/slide/:id' component={SlideNewsDetail}/>

                {/*Business Page Side*/}
                <Route exact path='/business' component={BusinessPage} />
                <Route exact path='/business/news/:id' component={BusinessDetailPage} />
                {/*GeneralPageSide*/}
                <Route exact path='/general' component={GeneralPage} />
                <Route exact path='/general/news/:id' component={GeneralDetailPage} />
            </Switch>
        </div>
    )
};

export default App;
