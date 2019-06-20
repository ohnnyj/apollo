import React from 'react';
import { Button, Text, View } from 'react-native';
import { Query } from 'react-apollo';

export default class App extends React.PureComponent {
  constructor(props, ...rest) {
    super(props, ...rest);

    const { numberOfModels, query } = props;

    this.query = query === 'small'
      ? require('../../graphql/query/small').default
      : require('../../graphql/query/big').default;

    global.numberOfModels = numberOfModels;
    global.timings.queryStart = Date.now();
  }

  render() {
    return (
      <View>
        <Query query={this.query}>
          {({ data, loading, error }) => {
            // console.log(data, loading, error);
            if (data) {
              return (
                <View>
                  <Text>Query Time: ~{Date.now() - global.timings.queryStart}ms</Text>
                </View>
              );
            }
            return null;
          }}
        </Query>
      </View>
    );
  }
}
