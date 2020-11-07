import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import bodyParser from "body-parser";

const app = express();
require("dotenv").config({
  path: ".env",
});

import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./schema";
import { resolvers } from "./schema/resolvers";

import { Recipe } from "./models/Recipe";
import { User } from "./models/User";

mongoose
  .connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log("error ===> ", err));

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: ({ req, res }) => ({ req, res, User, Recipe }),
});
apolloServer.applyMiddleware({ app });

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.listen(4000, () => {
  console.log(`GraphQL available at ${apolloServer.graphqlPath}`);
  console.log(`Server up in localhost:4000`);
});
