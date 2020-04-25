import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ListItem from "./ListItem";

const GameCard = (props) => {
    return (
        <div
            className={props.styles ? `game-card ${props.styles}` : "game-card"}
        >
            <Heading>{props.title}</Heading>
            <div className="ratings my-2">
                <ListItem title="Our Rating" text={props.ourRating} />
                <ListItem title="Players Rating" text={props.playersRating} />
            </div>
            <div className="game-details my-2">
                <ListItem title="Players" text={props.players.join(", ")} />
                <ListItem title="Playing Time" text={props.playingTime} />
                <ListItem title="Complexity" text={props.complexity} />
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
