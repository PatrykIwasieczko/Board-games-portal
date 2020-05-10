const Game = require("../models/game");
const Comment = require("../models/comment");

const rootValue = {
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
};

module.exports = rootValue;
