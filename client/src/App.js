import React from "react";
import "./App.scss";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <AppNavbar />
            <h1 style={{ marginTop: "5rem" }}>Hello</h1>
            <p>World</p>
        </BrowserRouter>
    );
};

export default App;
