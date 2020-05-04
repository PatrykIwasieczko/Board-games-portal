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
import SearchPage from "./pages/SearchPage";
import ForumPage from "./pages/ForumPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
    return (
        <BrowserRouter>
            <AppNavbar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/rank" component={RankPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/forum" component={ForumPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/game/:id" component={DetailsPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
