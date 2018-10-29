import React from 'react';
import { StyleSheet, Text } from 'react-native';

export class Title extends React.Component {
  render() {
    return <Text style={styles.text}>Github Repos Search</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
