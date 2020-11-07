import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Recipe {
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
  }

  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
    joinDate: String
  }

  type Query {
    recipes: [Recipe]
    users: [User]
  }

  type Mutation {
    addRecipe(
      name: String!
      description: String!
      category: String!
      instructions: String!
      username: String
    ): Recipe

    signupUser(username: String!, email: String!, password: String!): Token
  }
  type Token {
    token: String!
  }
`;
