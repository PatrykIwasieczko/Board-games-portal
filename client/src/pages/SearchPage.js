import React, { useState } from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";

import {
    DATA,
    CATEGORIES,
    MECHANICS,
    NUM_PLAYERS,
    TIME_PLAYING,
} from "../dummy-data";
import Paragraph from "../components/Paragraph";

import { Select, Input } from "antd";

const { Option } = Select;

const SearchPage = () => {
    const [games, setGames] = useState();
    const [categories, setCategories] = useState();
    const [mechanics, setMechanics] = useState();
    const [numberOfPlayers, setNumberOfPlayers] = useState();
    const [playingTime, setPlayingTime] = useState();

    const categoriesList = CATEGORIES.map((category) => {
        return <Option key={category}>{category}</Option>;
    });
    const mechanicsList = MECHANICS.map((mechanic) => {
        return <Option key={mechanic}>{mechanic}</Option>;
    });
    const numberOfPlayersList = NUM_PLAYERS.map((numOfPlayers) => {
        return <Option key={numOfPlayers}>{numOfPlayers}</Option>;
    });
    const playingTimeList = TIME_PLAYING.map((playTime) => {
        return <Option key={playTime}>{playTime}</Option>;
    });

    const searchGame = () => {
        let checker = (arr, target) => target.some((val) => arr.includes(val));

        setGames(
            DATA.filter((game) => {
                const gamesTimes = game.playingTime.split("-");
                const numeralTimes = gamesTimes.map((time) => +time);
                const checkGameTime = () => {
                    return playingTime.some((time) => {
                        return (
                            numeralTimes[0] <= time && numeralTimes[1] >= time
                        );
                    });
                };

                if (!numberOfPlayers && !mechanics && !categories) {
                    return checkGameTime();
                } else if (!numberOfPlayers && !playingTime && !categories) {
                    return checker(game.mechanics, mechanics);
                } else if (!playingTime && !categories && !mechanics) {
                    return checker(game.players, numberOfPlayers);
                } else if (!playingTime && !numberOfPlayers && !mechanics) {
                    return checker(game.categories, categories);
                } else if (!playingTime && !numberOfPlayers) {
                    return (
                        checker(game.categories, categories) &&
                        checker(game.mechanics, mechanics)
                    );
                } else if (!playingTime && !mechanics) {
                    return (
                        checker(game.categories, categories) &&
                        checker(game.players, numberOfPlayers)
                    );
                } else if (!playingTime && !categories) {
                    return (
                        checker(game.mechanics, mechanics) &&
                        checker(game.players, numberOfPlayers)
                    );
                } else if (!numberOfPlayers && !mechanics) {
                    return (
                        checker(game.categories, categories) && checkGameTime()
                    );
                } else if (!numberOfPlayers && !categories) {
                    return (
                        checker(game.mechanics, mechanics) && checkGameTime()
                    );
                } else if (!mechanics && !categories) {
                    return (
                        checker(game.players, numberOfPlayers) &&
                        checkGameTime()
                    );
                } else if (!numberOfPlayers) {
                    return (
                        checker(game.categories, categories) &&
                        checker(game.mechanics, mechanics) &&
                        checkGameTime()
                    );
                } else if (!categories) {
                    return (
                        checker(game.players, numberOfPlayers) &&
                        checker(game.mechanics, mechanics) &&
                        checkGameTime()
                    );
                } else if (!mechanics) {
                    return (
                        checker(game.players, numberOfPlayers) &&
                        checker(game.categories, categories) &&
                        checkGameTime()
                    );
                } else if (!playingTime) {
                    return (
                        checker(game.players, numberOfPlayers) &&
                        checker(game.categories, categories) &&
                        checker(game.mechanics, mechanics)
                    );
                } else {
                    return (
                        checker(game.players, numberOfPlayers) &&
                        checker(game.categories, categories) &&
                        checker(game.mechanics, mechanics) &&
                        checkGameTime()
                    );
                }
            })
        );
    };
    return (
        <Container>
            <Heading styles="pt-2">Search a game for you</Heading>
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select categories"
                onChange={(val) => setCategories(val)}
            >
                {categoriesList}
            </Select>
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select game mechanics"
                onChange={(val) => setMechanics(val)}
            >
                {mechanicsList}
            </Select>
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select number of players you want to play with"
                onChange={(val) => setNumberOfPlayers(val)}
            >
                {numberOfPlayersList}
            </Select>
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select how long do you want to play"
                onChange={(val) => setPlayingTime(val)}
            >
                {playingTimeList}
            </Select>
            <button onClick={searchGame}>Search</button>
            {games &&
                games.map((game) => (
                    <Paragraph key={game.id}>{game.title}</Paragraph>
                ))}
        </Container>
    );
};

export default SearchPage;
