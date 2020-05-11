// GraphQL
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const query = gql`
    {
        games {
            _id
            title
            img
            playersRating
            ourRating
            votersCount
        }
    }
`;

export default () => useQuery(query);
