// React
import React, { useEffect, useState } from "react";

// Components
import Container from "../components/Container";
// import Heading from "../components/Heading";
import Card from "../components/GameCard";

// DATA
import { DATA } from "../dummy-data";
import Paragraph from "../components/Paragraph";

const DetailsPage = (props) => {
    const [game, setGame] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const id = props.match.params.id;
        const currentGame = DATA.find((item) => {
            return item.id === parseInt(id);
        });
        setGame(currentGame);
        setLoading(false);
    }, [props.match.params.id, game]);
    return (
        <Container>
            {loading ? (
                <Paragraph>Loading...</Paragraph>
            ) : (
                <Card
                    title={game.title}
                    ourRating={game.ourRating}
                    playersRating={game.playersRating}
                    players={game.players}
                    playingTime={game.playingTime}
                    complexity={game.complexity}
                    categories={game.categories}
                    mechanics={game.mechanics}
                />
            )}
        </Container>
    );
};

export default DetailsPage;
