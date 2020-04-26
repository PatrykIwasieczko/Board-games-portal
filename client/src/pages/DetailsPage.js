// React
import React, { useEffect, useState } from "react";

// Components
import Container from "../components/Container";
// import Heading from "../components/Heading";
import GameCard from "../components/GameCard";

// DATA
import { DATA, COMMENTS } from "../dummy-data";
import Paragraph from "../components/Paragraph";
import Review from "../components/Review";
import Comment from "../components/Comment";
import SizedBox from "../components/SizedBox";

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
        <>
            {loading ? (
                <Paragraph>Loading...</Paragraph>
            ) : (
                <Container>
                    <GameCard
                        styles="pt-2"
                        title={game.title}
                        ourRating={game.ourRating}
                        playersRating={game.playersRating}
                        players={game.players}
                        playingTime={game.playingTime}
                        complexity={game.complexity}
                        categories={game.categories}
                        mechanics={game.mechanics}
                    />
                    <Review />
                    <SizedBox space="2" />
                    {COMMENTS.map((comment) => (
                        <Comment
                            key={comment.text}
                            author={comment.author}
                            text={comment.text}
                            rating={comment.rating}
                        />
                    ))}
                </Container>
            )}
        </>
    );
};

export default DetailsPage;
