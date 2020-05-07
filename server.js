const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");

const Game = require("./models/game");
const Comment = require("./models/comment");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(
    "/graphql",
    graphqlHttp({
        schema: buildSchema(`

        type Comment {
            author: String!
            content: String
            rating: String
            complexity: String
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
    `),
        rootValue: {
            games: () => {
                return Game.find()
                    .then((games) => {
                        return games;
                    })
                    .catch((err) => {
                        throw err;
                    });
            },

            game: (args) => {
                return Game.findById(args.id)
                    .then((game) => {
                        return game;
                    })
                    .catch((err) => {
                        throw err;
                    });
            },
            commentGame: async (args) => {
                const game = await Game.findById(args.id);
                const comment = new Comment({
                    author: args.commentInput.author,
                    content: args.commentInput.content,
                    rating: args.commentInput.rating,
                    complexity: args.commentInput.complexity,
                });

                await comment.save();
                game.votersCount++;
                // game.complexityCount++;
                // (parseInt(game.complexity) += parseInt(
                //     comment.complexity
                // )).toString();
                // (parseInt(game.rating) += parseInt(comment.rating)).toString();
                game.complexity.push(comment.complexity);
                game.playersRating.push(comment.rating);
                game.comments.push(comment);
                await game.save();
            },
            createGame: (args) => {
                const game = new Game({
                    title: args.gameInput.title,
                    categories: args.gameInput.categories,
                    mechanics: args.gameInput.mechanics,
                    players: args.gameInput.players,
                    playingTime: args.gameInput.playingTime,
                });

                return game
                    .save()
                    .then((result) => {
                        console.log(result);
                        return result;
                    })
                    .catch((err) => {
                        console.log(err);
                        throw err;
                    });
            },
        },
        graphiql: true,
    })
);

const db = config.get("mongoURI");
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
