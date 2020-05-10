const Game = require("../models/game");
const Comment = require("../models/comment");

const rootValue = {
    games: async (req, res, next) => {
        try {
            return await Game.find();
        } catch (err) {
            throw err;
        }
    },

    game: async (args) => {
        try {
            return await Game.findById(args.id);
        } catch (err) {
            throw err;
        }
    },
    commentGame: async (args) => {
        try {
            const game = await Game.findById(args.id);
            const comment = new Comment({
                author: args.commentInput.author,
                content: args.commentInput.content,
                rating: args.commentInput.rating,
                complexity: args.commentInput.complexity,
            });

            await comment.save();
            game.votersCount++;
            game.complexity.push(comment.complexity);
            game.playersRating.push(comment.rating);
            game.comments.push(comment);
            await game.save();
        } catch (err) {
            throw err;
        }
    },
    createGame: async (args) => {
        try {
            const game = new Game({
                title: args.gameInput.title,
                categories: args.gameInput.categories,
                mechanics: args.gameInput.mechanics,
                players: args.gameInput.players,
                playingTime: args.gameInput.playingTime,
            });

            await game.save();
            return game;
        } catch (err) {
            throw err;
        }
    },
};

module.exports = rootValue;
