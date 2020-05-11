// GraphQL
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const mutation = gql`
    mutation commentGame($id: ID!, $commentInput: CommentInput) {
        commentGame(id: $id, commentInput: $commentInput) {
            author
            rating
            content
            complexity
        }
    }
`;

export default () => {
    let [commentGame] = useMutation(mutation);
    return commentGame;
};
