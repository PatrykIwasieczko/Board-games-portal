import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import { NavLink } from "react-router-dom";

const list = [
    {
        img: "",
        title: "Gloomhaven (2017)",
        playersRating: "8.8",
        ourRating: "9.0",
        votersCount: 10,
    },
    {
        img: "",
        title: "Pandemic Legacy: Season 1 (2015)",
        playersRating: "8.7",
        ourRating: "8.5",
        votersCount: 10,
    },
    {
        img: "",
        title: "Terra Mystica (2017)",
        playersRating: "8.3",
        ourRating: "9.0",
        votersCount: 10,
    },
    {
        img: "",
        title: "Terraforming Mars (2016)",
        playersRating: "8.2",
        ourRating: "10.0",
        votersCount: 10,
    },
    {
        img: "",
        title: "Star Wars: Rebellion (2016)",
        playersRating: "8.5",
        ourRating: "7.5",
        votersCount: 10,
    },
    {
        img: "",
        title: "Gaia Project (2017)",
        playersRating: "8.4",
        ourRating: "9.0",
        votersCount: 10,
    },
    {
        img: "",
        title: "Scythe (2016)",
        playersRating: "8.8",
        ourRating: "9.5",
        votersCount: 10,
    },
    {
        img: "",
        title: "7 Wonders Duel (2015)",
        playersRating: "8.9",
        ourRating: "7.0",
        votersCount: 10,
    },
    {
        img: "",
        title: "Wingspan (2019)",
        playersRating: "7.8",
        ourRating: "9.0",
        votersCount: 10,
    },
    {
        img: "",
        title: "Blood Rage (2015)",
        playersRating: "8.0",
        ourRating: "8.0",
        votersCount: 10,
    },
];

const RankPage = () => {
    return (
        <Container>
            <Heading styles="py-2">RankPage</Heading>
            <div className="rank-table">
                <Paragraph styles="left-align clickable">Title</Paragraph>
                <Paragraph styles="clickable">Players Rating</Paragraph>
                <Paragraph styles="clickable">Our Rating</Paragraph>
                <Paragraph styles="clickable">Number of voters</Paragraph>
                {list.map((item) => (
                    <>
                        <Paragraph styles="left-align">
                            <NavLink to={`/game/${item.title}`}>
                                {item.title}
                            </NavLink>
                        </Paragraph>
                        <Paragraph>{item.playersRating}</Paragraph>
                        <Paragraph>{item.ourRating}</Paragraph>
                        <Paragraph>{item.votersCount}</Paragraph>
                    </>
                ))}
            </div>
        </Container>
    );
};

export default RankPage;
