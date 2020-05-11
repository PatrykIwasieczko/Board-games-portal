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

// GraphQL
import useCommentMutation from "../graphQL/useCommentMutation";

// Utils
import { changeRateStyles } from "../utils/helpers";

const GameCard = (props) => {
    const {
        title,
        ourRating,
        img,
        playingTime,
        categories,
        mechanics,
        players,
    } = props.game;
    const { complexity, playersRating } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    let commentGame = useCommentMutation();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async (input) => {
        await commentGame({
            variables: {
                id: props.gameId,
                commentInput: input,
            },
        });
        setIsModalVisible(false);
    };

    const handleCancel = (e) => {
        setIsModalVisible(false);
    };

    return (
        <div
            className={props.styles ? `game-card ${props.styles}` : "game-card"}
        >
            <Heading>
                {title}{" "}
                <Button
                    onClick={showModal}
                    type="primary"
                    icon={<StarOutlined />}
                >
                    Rate
                </Button>
            </Heading>
            <div className="image">
                <img src={`/images/${img}`} alt="" />
            </div>
            <div className="ratings my-2">
                {ourRating === "0" ? (
                    <ListItem
                        styles={changeRateStyles(ourRating)}
                        title="Our Rating"
                        text={`${ourRating} / 10.0`}
                    />
                ) : (
                    <ListItem title="No Review Yet" />
                )}
                <ListItem
                    styles={changeRateStyles(playersRating)}
                    title="Players Rating"
                    text={`${playersRating} / 10.0`}
                />
            </div>
            <div className="game-details my-2">
                <ListItem
                    title="Players"
                    text={
                        players.length > 1
                            ? `${players[0]} -
                                  ${players[players.length - 1]}`
                            : players
                    }
                />
                <ListItem title="Playing Time" text={`${playingTime} min`} />
                <ListItem title="Complexity" text={`${complexity} / 10.0`} />
            </div>
            <div>
                <Paragraph styles="my-1">
                    Categories: {categories.join(", ")}
                </Paragraph>
                <Paragraph styles="my-1">
                    Mechanics: {mechanics.join(", ")}
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
