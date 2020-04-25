import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { DATA } from "../dummy-data";

const DetailsPage = (props) => {
    const [game, setGame] = useState();
    useEffect(() => {
        const id = props.match.params.id;
        const currentGame = DATA.find((item) => {
            return item.id === parseInt(id);
        });
        setGame(currentGame);
    }, [props.match.params.id, game]);
    return (
        <Container>
            <Heading styles="py-2">{game ? game.title : "Hello"}</Heading>
        </Container>
    );
};

export default DetailsPage;
