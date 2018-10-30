import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const ErrorText = ({ error }: { error: string }) => {
  return <Text style={styles.errorText}>{error}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
  },
});
