import { GraphQLClient } from 'graphql-request'
const GRAPHQL_ENDPOINT = process.env.GATSBY_GRAPHQL_ENDPOINT || 'https://sd6anpfo.api.sanity.io/v1/graphql/production/default'
export const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.SANITY_TOKEN}`
  }
})
