// React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "./App.scss";
import "react-widgets/lib/scss/react-widgets.scss";

// Components
import AppNavbar from "./components/AppNavbar";
import MainPage from "./pages/MainPage";
import RankPage from "./pages/RankPage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
    return (
        <BrowserRouter>
            <AppNavbar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/rank" component={RankPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/game/:id" component={DetailsPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
