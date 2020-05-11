import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import Heading from "../components/Heading";
import Container from "../components/Container";
import Paragraph from "../components/Paragraph";
import SizedBox from "../components/SizedBox";

// Antd
import { Select, Button, List, Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// DATA
import {
    CATEGORIES,
    MECHANICS,
    NUM_PLAYERS,
    TIME_PLAYING,
} from "../dummy-data";

// GraphQL
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

// Utils
import { getAverageFromArray } from "../utils/helpers";

const GET_GAMES = gql`
    {
        games {
            _id
            title
            img
            playersRating
            playingTime
            mechanics
            categories
            players
            img
        }
    }
`;

const { Option } = Select;

const SearchPage = () => {
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [mechanics, setMechanics] = useState([]);
    const [numberOfPlayers, setNumberOfPlayers] = useState([]);
    const [playingTime, setPlayingTime] = useState([]);
    const [searchDone, setSearchDone] = useState(false);

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

    const { data, loading, error } = useQuery(GET_GAMES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const searchGame = () => {
        let checker = (arr, target) => target.some((val) => arr.includes(val));

        setGames(
            data.games.filter((game) => {
                const gamesTimes = game.playingTime.split("-");
                const numeralTimes = gamesTimes.map((time) => +time);
                const checkGameTime = () => {
                    return playingTime.some((time) => {
                        return (
                            numeralTimes[0] <= time && numeralTimes[1] >= time
                        );
                    });
                };
                if (
                    !numberOfPlayers.length > 0 &&
                    !mechanics.length > 0 &&
                    !categories.length > 0 &&
                    !playingTime.length > 0
                ) {
                    return game;
                } else if (
                    !numberOfPlayers.length > 0 &&
                    !mechanics.length > 0 &&
                    !categories.length > 0
                ) {
                    return checkGameTime();
                } else if (
                    !numberOfPlayers.length > 0 &&
                    !playingTime.length > 0 &&
                    !categories.length > 0
                ) {
                    return checker(game.mechanics, mechanics);
                } else if (
                    !playingTime.length > 0 &&
                    !categories.length > 0 &&
                    !mechanics.length > 0
                ) {
                    return checker(game.players, numberOfPlayers);
                } else if (
                    !playingTime.length > 0 &&
                    !numberOfPlayers.length > 0 &&
                    !mechanics.length > 0
                ) {
                    return checker(game.categories, categories);
                } else if (
                    !playingTime.length > 0 &&
                    !numberOfPlayers.length > 0
                ) {
                    return (
                        checker(game.categories, categories) &&
                        checker(game.mechanics, mechanics)
                    );
                } else if (!playingTime.length > 0 && !mechanics.length > 0) {
                    return (
                        checker(game.categories, categories) &&
                        checker(game.players, numberOfPlayers)
                    );
                } else if (!playingTime.length > 0 && !categories.length > 0) {
                    return (
                        checker(game.mechanics, mechanics) &&
                        checker(game.players, numberOfPlayers)
                    );
                } else if (
                    !numberOfPlayers.length > 0 &&
                    !mechanics.length > 0
                ) {
                    return (
                        checker(game.categories, categories) && checkGameTime()
                    );
                } else if (
                    !numberOfPlayers.length > 0 &&
                    !categories.length > 0
                ) {
                    return (
                        checker(game.mechanics, mechanics) && checkGameTime()
                    );
                } else if (!mechanics.length > 0 && !categories.length > 0) {
                    return (
                        checker(game.players, numberOfPlayers) &&
                        checkGameTime()
                    );
                } else if (!numberOfPlayers.length > 0) {
                    return (
                        checker(game.categories, categories) &&
                        checker(game.mechanics, mechanics) &&
                        checkGameTime()
                    );
                } else if (!categories.length > 0) {
                    return (
                        checker(game.players, numberOfPlayers) &&
                        checker(game.mechanics, mechanics) &&
                        checkGameTime()
                    );
                } else if (!mechanics.length > 0) {
                    return (
                        checker(game.players, numberOfPlayers) &&
                        checker(game.categories, categories) &&
                        checkGameTime()
                    );
                } else if (!playingTime.length > 0) {
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
        setSearchDone(true);
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
            <SizedBox space="1" />
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select game mechanics"
                onChange={(val) => setMechanics(val)}
            >
                {mechanicsList}
            </Select>
            <SizedBox space="1" />
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select number of players you want to play with"
                onChange={(val) => setNumberOfPlayers(val)}
            >
                {numberOfPlayersList}
            </Select>
            <SizedBox space="1" />
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select how long do you want to play"
                onChange={(val) => setPlayingTime(val)}
            >
                {playingTimeList}
            </Select>
            <SizedBox space="1" />
            <Button
                onClick={searchGame}
                type="primary"
                icon={<SearchOutlined />}
            >
                Search
            </Button>

            <SizedBox space="1" />
            {games.length === 0 && searchDone ? (
                <Paragraph>
                    No games found. Try to readjust search parameters
                </Paragraph>
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={games.sort(
                        (a, b) =>
                            getAverageFromArray(b.playersRating) -
                            getAverageFromArray(a.playersRating)
                    )}
                    renderItem={(game) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={`/images/${game.img}`}
                                        size="large"
                                    />
                                }
                                title={
                                    <NavLink to={`/game/${game._id}`}>
                                        {game.title}
                                    </NavLink>
                                }
                                description={
                                    game.playersRating.length > 0
                                        ? getAverageFromArray(
                                              game.playersRating
                                          )
                                        : null
                                }
                            />
                        </List.Item>
                    )}
                />
            )}
        </Container>
    );
};

export default SearchPage;
