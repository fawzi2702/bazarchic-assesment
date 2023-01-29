import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_POST_API_ENDPOINT,
  cache: new InMemoryCache(),
})
