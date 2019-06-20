import gql from 'graphql-tag';

export default gql`
  query list {
    list @client {
      _ {
        ... on A {
          a
        }
        ... on B {
          b
        }
      }
    }
  }
`;
