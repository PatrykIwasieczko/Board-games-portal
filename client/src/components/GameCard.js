// React
import React, { useState } from "react";

// Components
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ListItem from "./ListItem";

// Antd
import { Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import RateModal from "./RateModal";

const GameCard = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (rating, review) => {
        setIsModalVisible(false);
    };

    const handleCancel = (e) => {
        setIsModalVisible(false);
    };

    const changeRateStyles = (rating) => {
        if (rating >= 8.5) {
            return "green";
        } else if (rating >= 7.5) {
            return "light-green";
        } else if (rating >= 6) {
            return "yellow";
        } else if (rating >= 4) {
            return "orange";
        } else {
            return "red";
        }
    };
    return (
        <div
            className={props.styles ? `game-card ${props.styles}` : "game-card"}
        >
            <Heading>
                {props.title}{" "}
                <Button
                    onClick={showModal}
                    type="primary"
                    icon={<StarOutlined />}
                >
                    Rate
                </Button>
            </Heading>
            <div className="image">
                <img src={props.img} alt="" />
            </div>
            <div className="ratings my-2">
                <ListItem
                    styles={changeRateStyles(props.ourRating)}
                    title="Our Rating"
                    text={props.ourRating}
                />
                <ListItem
                    styles={changeRateStyles(props.playersRating)}
                    title="Players Rating"
                    text={props.playersRating}
                />
            </div>
            <div className="game-details my-2">
                <ListItem
                    title="Players"
                    text={
                        props.players.length > 1
                            ? `${props.players[0]} -
                                  ${props.players[props.players.length - 1]}`
                            : props.players
                    }
                />
                <ListItem
                    title="Playing Time"
                    text={`${props.playingTime} min`}
                />
                <ListItem title="Complexity" text={props.complexity} />
            </div>
            <div>
                <Paragraph styles="my-1">
                    Categories: {props.categories.join(", ")}
                </Paragraph>
                <Paragraph styles="my-1">
                    Mechanics: {props.mechanics.join(", ")}
                </Paragraph>
                <RateModal
                    isModalVisible={isModalVisible}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />
            </div>
        </div>
    );
};

export default GameCard;
