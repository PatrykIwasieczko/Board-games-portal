// React
import React, { useState, useEffect } from "react";

// Components
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import SingleGame from "../components/SingleGame";

// Antd
import { Pagination } from "antd";

// GraphQL
import useGamesQuery from "../graphQL/useGamesQuery";

// Utils
import { getAverageFromArray } from "../utils/helpers";

const RankPage = (props) => {
    const numEachPage = 5;
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    const handleChange = (value) => {
        if (value <= 1) {
            setMinValue(0);
            setMaxValue(5);
        } else {
            setMinValue(maxValue);
            setMaxValue(value * 5);
        }
    };

    const sortArray = (type, isArray = false) => {
        const types = {
            title: "title",
            playersRating: "playersRating",
            ourRating: "ourRating",
            votersCount: "votersCount",
        };

        const sortProperty = types[type];
        let sorted = [...games].sort(
            (a, b) => b[sortProperty] - a[sortProperty]
        );
        if (isArray) {
            sorted = [...games].sort(
                (a, b) =>
                    getAverageFromArray(b.playersRating) -
                    getAverageFromArray(a.playersRating)
            );
        }
        if (types[type] === "title") {
            sorted = [...games].sort((a, b) => {
                return b[sortProperty].toLowerCase() >
                    a[sortProperty].toLowerCase()
                    ? -1
                    : 1;
            });
        }
        setGames(sorted);
    };

    const { data, loading, error } = useGamesQuery();
    const [games, setGames] = useState();

    useEffect(() => {
        if (!loading && data) {
            setGames(
                data.games.sort(
                    (a, b) =>
                        getAverageFromArray(b.playersRating) -
                        getAverageFromArray(a.playersRating)
                )
            );
        }
    }, [data, loading]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Container>
            <Heading styles="py-2">RankPage</Heading>
            <div className="rank-table">
                <div className="headers">
                    <Paragraph>Rank</Paragraph>
                    <Paragraph
                        styles="left-align clickable"
                        onClick={() => {
                            sortArray("title");
                        }}
                    >
                        Title
                    </Paragraph>
                    <Paragraph
                        styles="clickable"
                        onClick={() => {
                            sortArray("playersRating", true);
                        }}
                    >
                        Players Rating
                    </Paragraph>
                    <Paragraph
                        styles="clickable"
                        onClick={() => {
                            sortArray("ourRating");
                        }}
                    >
                        Our Rating
                    </Paragraph>
                    <Paragraph
                        styles="clickable"
                        onClick={() => {
                            sortArray("votersCount");
                        }}
                    >
                        Number of voters
                    </Paragraph>
                </div>
                {games &&
                    games
                        .map((item, index) => (
                            <SingleGame
                                rank={index + 1}
                                key={item._id}
                                link={`/game/${item._id}`}
                                title={item.title}
                                playersRating={
                                    item.playersRating.length === 0
                                        ? "0.0"
                                        : getAverageFromArray(
                                              item.playersRating
                                          )
                                }
                                ourRating={item.ourRating}
                                votersCount={item.votersCount}
                                img={`/images/${item.img}`}
                            />
                        ))
                        .slice(minValue, maxValue)}
            </div>
            <Pagination
                defaultCurrent={1}
                defaultPageSize={numEachPage} //default size of page
                onChange={handleChange}
                total={10} //total number of card data available
            />
        </Container>
    );
};

export default RankPage;
