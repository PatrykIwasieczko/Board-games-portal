// React
import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Paragraph from "../components/Paragraph";

const SingleGame = (props) => {
    return (
        <div>
            <Paragraph styles="left-align">
                <img src={props.img} alt="" />
                <NavLink to={props.link}>{props.title}</NavLink>
            </Paragraph>
            <Paragraph>{props.playersRating}</Paragraph>
            <Paragraph>{props.ourRating}</Paragraph>
            <Paragraph>{props.votersCount}</Paragraph>
        </div>
    );
};

export default SingleGame;
