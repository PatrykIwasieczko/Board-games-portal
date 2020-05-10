const { buildSchema } = require("graphql");

const schema = buildSchema(`

type Comment {
    author: String!
    content: String
    rating: Float
    complexity: Float
    date: String
}

type Game {
    _id: ID!
    img: String
    title: String!
    ourRating: Float
    playersRating: [Float]
    votersCount: Int
    complexity: [Int]
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
    rating: Int!
    complexity: Int!
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
