// React
import React, { useState } from "react";

// Components
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import SingleGame from "../components/SingleGame";

// DATA
import { DATA } from "../dummy-data";
import { Pagination } from "antd";

const RankPage = () => {
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
    return (
        <Container>
            <Heading styles="py-2">RankPage</Heading>
            <div className="rank-table">
                <div className="headers">
                    <Paragraph>Rank</Paragraph>
                    <Paragraph styles="left-align clickable">Title</Paragraph>
                    <Paragraph styles="clickable">Players Rating</Paragraph>
                    <Paragraph styles="clickable">Our Rating</Paragraph>
                    <Paragraph styles="clickable">Number of voters</Paragraph>
                </div>
                {DATA.sort((a, b) => b.playersRating - a.playersRating)

                    .map((item, index) => (
                        <SingleGame
                            rank={index + 1}
                            key={item.id}
                            link={`/game/${item.id}`}
                            title={item.title}
                            playersRating={item.playersRating}
                            ourRating={item.ourRating}
                            votersCount={item.votersCount}
                            img={item.img}
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
