import React from "react";
import "./App.scss";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
    return (
        <BrowserRouter>
            <AppNavbar />
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
