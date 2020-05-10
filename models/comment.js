const mongoose = require("mongoose"); // import mongoose

const Schema = mongoose.Schema;

// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const commentSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
    },
    complexity: {
        type: Number,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model("Comment", commentSchema); // create and export the model
