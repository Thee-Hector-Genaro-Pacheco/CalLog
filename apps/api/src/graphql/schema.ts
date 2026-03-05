import { buildSchema } from "graphql";

export const schema = buildSchema(/* GraphQL */ `
  type Query {
    health: String!
  }
`);
