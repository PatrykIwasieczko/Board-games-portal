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

// Utils
import { getAverageFromArray } from "../utils/helpers";

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
                date
            }
        }
    }
`;

const DetailsPage = (props) => {
    const { data, loading, error, refetch } = useQuery(GET_GAME, {
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
                        game={data.game}
                        playersRating={
                            data.game.playersRating.length === 0
                                ? "0"
                                : getAverageFromArray(data.game.playersRating)
                        }
                        complexity={
                            data.game.complexity.length === 0
                                ? "0"
                                : getAverageFromArray(data.game.complexity)
                        }
                        gameId={props.match.params.id}
                        refetch={refetch}
                    />
                    <Review />
                    <SizedBox space="2" />
                    {data.game.comments
                        .sort((a, b) => b.date - a.date)
                        .map((comment, index) => (
                            <Comment comment={comment} key={index} />
                        ))}
                </Container>
            )}
        </>
    );
};

export default DetailsPage;
