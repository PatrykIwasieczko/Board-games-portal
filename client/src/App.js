// React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "./App.scss";

// Components
import AppNavbar from "./components/AppNavbar";
import MainPage from "./pages/MainPage";
import RankPage from "./pages/RankPage";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
    return (
        <BrowserRouter>
            <AppNavbar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/rank" component={RankPage} />
                <Route exact path="/game/:id" component={DetailsPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
