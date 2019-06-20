import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import resolvers from './resolvers';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  resolvers,
});

export default apolloClient;
