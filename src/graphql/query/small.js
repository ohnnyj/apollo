import gql from 'graphql-tag';

export default gql`
  query list {
    list @client {
      a
    }
  }
`;
