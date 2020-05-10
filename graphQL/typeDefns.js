const { buildSchema } = require("graphql");

const schema = buildSchema(`

type Comment {
    author: String!
    content: String
    rating: String
    complexity: String
    date: String
}

type Game {
    _id: ID!
    img: String
    title: String!
    ourRating: String
    playersRating: [String]
    votersCount: String
    complexity: [String]
    categories: [String]
    mechanics: [String]
    comments: [Comment]
    players: [String]
    ourReview: [String]
    playingTime: String
}

input GameInput {
    title: String!
    categories: [String]!
    mechanics: [String]!
    players: [String]!
    playingTime: String!
}

input CommentInput {
    author: String!
    content: String
    rating: String!
    complexity: String
}

type gameQuery {
    games: [Game!]!
    game(id: ID!): Game
}

type gameMutation {
    createGame(gameInput: GameInput): Game
    commentGame(commentInput: CommentInput, id: ID!): Comment
}

schema {
    query: gameQuery
    mutation: gameMutation
}
`);

module.exports = schema;
