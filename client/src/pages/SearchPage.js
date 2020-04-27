import React, { useState } from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";

import { DATA, CATEGORIES } from "../dummy-data";
import Paragraph from "../components/Paragraph";

import { Multiselect } from "react-widgets";

const SearchPage = () => {
    const [gameName, setGameName] = useState();
    const [games, setGames] = useState();
    const [category, setCategory] = useState();
    const searchGame = () => {
        let checker = (arr, target) => target.every((val) => arr.includes(val));
        setGames(
            DATA.filter((game) => {
                return (
                    game.title.toLowerCase().includes(gameName.toLowerCase()) &&
                    checker(game.categories, category)
                );
            })
        );
    };
    return (
        <Container>
            <Heading styles="pt-2">Search a game for you</Heading>
            <input
                placeholder="Enter game name"
                onChange={(e) => setGameName(e.target.value)}
            />
            {/* <select onChange={(e) => setCategory(e.target.value)} name="" id="">
                <option value="adventure">Adventure</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Sci-Fi</option>
            </select> */}
            <Multiselect data={CATEGORIES} onChange={(e) => setCategory(e)} />

            <button onClick={searchGame}>Search</button>
            {games &&
                games.map((game) => (
                    <Paragraph key={game.id}>{game.title}</Paragraph>
                ))}
        </Container>
    );
};

export default SearchPage;
