import React from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Apollo from '../containers/Apollo';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  button: {
    width: 200,
    alignSelf: 'flex-end',
  },
  button1: {
    marginBottom: 20,
  },
  numberOfModels: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  textInput: {
    flex: 1,
    borderColor: '#00000080',
    borderWidth: 2,
    marginLeft: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

global.timings = {};

export default class App extends React.PureComponent {
  state = { numberOfModels: 100 };

  onBig = () => {
    this.setState({
      query: 'big',
      Child: require('../routes/query/index').default,
    });
  };

  onSmall = () => {
    this.setState({
      query: 'small',
      Child: require('../routes/query/index').default,
    });
  };

  onEnterNumberOfModels = (text) => {
    this.setState({
      numberOfModels: parseInt(text),
    });
  };

  render() {
    const { Child, childProps, numberOfModels, query } = this.state;

    return (
      <Apollo>
        <View
          style={styles.root}>
          {!Child && (
            <View style={styles.numberOfModels}>
              <Text>Number Of Models:</Text>
              <TextInput
                style={styles.textInput}
                keyboardType="number-pad"
                onChangeText={this.onEnterNumberOfModels}
                value={numberOfModels + ''}
              />
            </View>
          )}
          {!Child && <View style={[styles.button, styles.button1]}><Button onPress={this.onBig} title="Big Query" /></View>}
          {!Child && <View style={styles.button}><Button onPress={this.onSmall} title="Small Query" /></View>}
          {Child && <Child query={query} numberOfModels={numberOfModels} />}
        </View>
      </Apollo>
    );
  }
}

AppRegistry.registerComponent('Main', () => App);
