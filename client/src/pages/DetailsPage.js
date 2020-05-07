// React
import React from "react";

// Components
import Container from "../components/Container";
import GameCard from "../components/GameCard";

// DATA
import { COMMENTS } from "../dummy-data";

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
        }
    }
`;

const DetailsPage = (props, id) => {
    const { data, loading, error } = useQuery(GET_GAME, {
        variables: { id: props.match.params.id },
    });

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
                                : (
                                      data.game.playersRating.reduce((a, b) => {
                                          return +a + +b;
                                      }, 0) / data.game.playersRating.length
                                  )
                                      .toFixed(1)
                                      .toString()
                        }
                        players={data.game.players}
                        playingTime={data.game.playingTime}
                        complexity={
                            data.game.complexity.length === 0
                                ? "0"
                                : (
                                      data.game.complexity.reduce((a, b) => {
                                          return +a + +b;
                                      }, 0) / data.game.complexity.length
                                  )
                                      .toFixed(1)
                                      .toString()
                        }
                        categories={data.game.categories}
                        mechanics={data.game.mechanics}
                        img={`/images/${data.game.img}`}
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
