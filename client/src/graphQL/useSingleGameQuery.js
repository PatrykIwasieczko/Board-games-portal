// GraphQL
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const query = gql`
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

export default () =>
    useQuery(query, { variables: { id: props.match.params.id } });
