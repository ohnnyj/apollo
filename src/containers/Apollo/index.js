import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from '../../graphql/client';

export default class Apollo extends React.PureComponent {
  render() {
    const { children } = this.props;
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  }
}
