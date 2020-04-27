// React
import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/rank">Top Games</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/">Forum</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AppNavbar;
