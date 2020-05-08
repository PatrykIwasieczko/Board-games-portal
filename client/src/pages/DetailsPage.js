// React
import React from "react";

// Components
import Container from "../components/Container";
import GameCard from "../components/GameCard";

// Components
import Review from "../components/Review";
import Comment from "../components/Comment";
import SizedBox from "../components/SizedBox";

// GraphQL
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_GAME = gql`
    query game($id: ID!) {
        game(id: $id) {
            title
            img
            playersRating
            ourRating
            votersCount
            categories
            mechanics
            complexity
            players
            playingTime
            comments {
                author
                rating
                complexity
                content
            }
        }
    }
`;

const DetailsPage = (props, id) => {
    const { data, loading, error } = useQuery(GET_GAME, {
        variables: { id: props.match.params.id },
    });

    const getAverageFromArray = (arr) => {
        return (
            arr.reduce((a, b) => {
                return +a + +b;
            }, 0) / arr.length
        )
            .toFixed(1)
            .toString();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <>
            {data.game && (
                <Container>
                    <GameCard
                        styles="pt-2"
                        title={data.game.title}
                        ourRating={data.game.ourRating}
                        playersRating={
                            data.game.playersRating.length === 0
                                ? "0"
                                : getAverageFromArray(data.game.playersRating)
                        }
                        players={data.game.players}
                        playingTime={data.game.playingTime}
                        complexity={
                            data.game.complexity.length === 0
                                ? "0"
                                : getAverageFromArray(data.game.complexity)
                        }
                        categories={data.game.categories}
                        mechanics={data.game.mechanics}
                        img={`/images/${data.game.img}`}
                        gameId={props.match.params.id}
                    />
                    <Review />
                    <SizedBox space="2" />
                    {data.game.comments.map((comment) => (
                        <Comment
                            key={comment._id}
                            author={comment.author}
                            text={comment.content}
                            rating={comment.rating}
                            complexity={comment.complexity}
                        />
                    ))}
                </Container>
            )}
        </>
    );
};

export default DetailsPage;
