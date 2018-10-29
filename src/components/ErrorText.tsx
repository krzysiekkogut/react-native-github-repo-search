import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  error: string;
}

export class ErrorText extends React.Component<Props> {
  render() {
    return <Text style={styles.errorText}>{this.props.error}</Text>;
  }
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    margin: 16,
  },
});
