import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import resolvers from './resolvers';

const cache = new InMemoryCache({
  fragmentMatcher: new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
      __schema: {
        types: [
          {
            kind: 'UNION',
            name: '_',
            possibleTypes: [{ name: 'A' }, { name: 'B' }],
          },
        ],
      },
    },
  }),
});

const apolloClient = new ApolloClient({
  cache,
  resolvers,
});

export default apolloClient;
