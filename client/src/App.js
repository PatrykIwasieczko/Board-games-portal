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

// GraphQL
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql",
});
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
};

export default App;
