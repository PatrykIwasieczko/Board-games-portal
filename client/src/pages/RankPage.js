// React
import React from "react";

// Components
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import SingleGame from "../components/SingleGame";

// DATA
import { DATA } from "../dummy-data";

const RankPage = () => {
    return (
        <Container>
            <Heading styles="py-2">RankPage</Heading>
            <div className="rank-table">
                <div>
                    <Paragraph styles="left-align clickable">Title</Paragraph>
                    <Paragraph styles="clickable">Players Rating</Paragraph>
                    <Paragraph styles="clickable">Our Rating</Paragraph>
                    <Paragraph styles="clickable">Number of voters</Paragraph>
                </div>
                {DATA.map((item) => (
                    <SingleGame
                        key={item.id}
                        link={`/game/${item.id}`}
                        title={item.title}
                        playersRating={item.playersRating}
                        ourRating={item.ourRating}
                        votersCount={item.votersCount}
                        img={item.img}
                    />
                ))}
            </div>
        </Container>
    );
};

export default RankPage;
