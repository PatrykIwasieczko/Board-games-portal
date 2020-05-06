const { buildSchema } = require("graphql");

// // const axios = require("axios");

// const {
//     GraphQLObjectType,
//     GraphQLInt,
//     GraphQLString,
//     GraphQLBoolean,
//     GraphQLList,
//     GraphQLSchema,
//     GraphQLID,
// } = require("graphql");

// const GameType = new GraphQLObjectType({
//     name: "Game",
//     fields: () => ({
//         id: { type: GraphQLID },
//         title: { type: GraphQLString },
//         playersRating: { type: GraphQLString },
//         ourRating: { type: GraphQLString },
//         votersCount: { type: GraphQLInt },
//         playingTime: { type: GraphQLString },
//         complexity: { type: GraphQLString },
//         categories: { type: GraphQLList(GraphQLString) },
//         mechanics: { type: GraphQLList(GraphQLString) },
//         ourReview: { type: ReviewType },
//         players: { type: GraphQLList(GraphQLString) },
//         comments: { type: GraphQLList(CommentType) },
//     }),
// });

// const ReviewType = new GraphQLObjectType({
//     name: "Review",
//     fields: () => ({
//         content: { type: GraphQLString },
//     }),
// });

// const CommentType = new GraphQLObjectType({
//     name: "Comment",
//     fields: () => ({
//         author: { type: GraphQLString },
//         rating: { type: GraphQLString },
//         content: { type: GraphQLString },
//     }),
// });

// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         games: {
//             type: new GraphQLList(GameType),
//             resolve(parent, args){
//                 return G
//             }
//         }
//     }
// })

const schema = buildSchema(`
    type Game {
        _id: ID!
        title: String!,
        playersRating: String,
        ourRating: String,
        votersCount: Int,
        playingTime: String,
        complexity: String,
        categories: [String],
        mechanics: [String],
        ourReview: Review,
        players: [String],
        comments: [Comment],
    }
    type Comment {
        author: String,
        rating: String,
        content: String,
    }
    type Review {
        content: String,
    }

    type gamesQuery {
        games: [Game]
    }

    schema {
        query: gamesQuery
    }
`);

const rootValue = {
    games: () => {
        return games;
    },
};

module.exports = {
    schema: schema,
    rootValue: rootValue,
};
