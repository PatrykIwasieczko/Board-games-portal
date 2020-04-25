import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const GameCard = (props) => {
    return (
        <div
            className={props.styles ? `game-card ${props.styles}` : "game-card"}
        >
            <Heading>{props.title}</Heading>
            <div className="ratings my-2">
                <div>
                    <Paragraph>Our Rating</Paragraph>
                    <Paragraph>{props.ourRating}</Paragraph>
                </div>
                <div>
                    <Paragraph>Players Rating</Paragraph>
                    <Paragraph>{props.playersRating}</Paragraph>
                </div>
            </div>
            <div className="game-details my-2">
                <div>
                    <Paragraph>Players</Paragraph>
                    <Paragraph>{props.players.join(", ")}</Paragraph>
                </div>
                <div>
                    <Paragraph>Playing time</Paragraph>
                    <Paragraph>{props.playingTime}</Paragraph>
                </div>
                <div>
                    <Paragraph>Complexity</Paragraph>
                    <Paragraph>{props.complexity}</Paragraph>
                </div>
            </div>
            <div>
                <Paragraph styles="my-1">
                    Categories: {props.categories.join(", ")}
                </Paragraph>
                <Paragraph styles="my-1">
                    Mechanics: {props.mechanics.join(", ")}
                </Paragraph>
            </div>
        </div>
    );
};

export default GameCard;
