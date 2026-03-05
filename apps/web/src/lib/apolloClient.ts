import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL =
    process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:4000/graphql";

export function makeApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: GRAPHQL_URL,
            credentials: "include",
        }),
        cache: new InMemoryCache(),
    });
}
