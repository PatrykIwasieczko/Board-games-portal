const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const config = require("config");

const Game = require("./models/game");

const app = express();
app.use(bodyParser.json());

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
            title: String!
            ourRating: String
            playersRating: String
            votersCount: String
            complexity: String
            complexityCount: String
            categories: [String]
            mechanics: [String]
            comments: [Comment]
            players: [String]
            ourReview: [String]
        }

        input GameInput {
            title: String!
            categories: [String]!
            mechanics: [String]!
            players: [String]!
        }

        type gameQuery {
            games: [Game!]!
        }

        type gameMutation {
            createGame(gameInput: GameInput): Game
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
            createGame: (args) => {
                const game = new Game({
                    title: args.gameInput.title,
                    categories: args.gameInput.categories,
                    mechanics: args.gameInput.mechanics,
                    players: args.gameInput.players,
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
