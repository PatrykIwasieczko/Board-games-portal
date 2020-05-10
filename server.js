const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("./graphQL/typeDefns");
const rootValue = require("./graphQL/resolvers");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
app.use(express.json());

app.use(cors());

app.use(
    "/graphql",
    graphqlHttp({
        schema,
        rootValue,
        graphiql: true,
    })
);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
