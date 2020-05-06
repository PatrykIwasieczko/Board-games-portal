// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const commentSchema = new Schema({
//     author: { type: String },
//     review: { type: String },
//     rating: { type: String },
// });

// const reviewSchema = new Schema({
//     content: { type: String },
// });
// const gameSchema = new Schema({
//     title: {
//         type: String,
//         // required: true,
//     },
//     playersRating: { type: String },
//     ourRating: { type: String },
//     votersCount: { type: Number },
//     playingTime: { type: String },
//     complexity: { type: String },
//     categories: { type: [String] },
//     mechanics: { type: [String] },
//     ourReview: { type: reviewSchema },
//     players: { type: [String] },
//     comments: { type: [commentSchema] },
// });

// const simpleGameSchema = new Schema({
//     title: { type: String },
// });

// module.exports = mongoose.model("SimpleGame", simpleGameSchema);

const mongoose = require("mongoose");
const commentSchema = require("./comment").schema;

const Schema = mongoose.Schema;

// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ourRating: {
        type: String,
        default: "0",
        required: true,
    },
    playersRating: {
        type: String,
        default: "0",
        required: true,
    },
    votersCount: {
        type: String,
        default: "0",
    },
    complexity: {
        type: String,
        default: "0",
    },
    complexityCount: {
        type: String,
        default: "0",
    },
    categories: {
        type: [String],
        required: true,
    },
    mechanics: {
        type: [String],
        required: true,
    },
    comments: {
        type: [commentSchema],
    },
    players: {
        type: [String],
        required: true,
    },
    ourReview: {
        type: [String],
    },
});

module.exports = mongoose.model("Game", gameSchema); // create and export the model
