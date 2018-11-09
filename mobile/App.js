import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Todos } from './src';

console.log(Todos);
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Todos />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
