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
      b
      c
      d
      e
      f
      g
      h
      i
      j
      k
      l
      m
      n
      o
      p
      q
      r
      s
      t
      u
      v
      w
      x
      y
      z
    }
  }
`;
