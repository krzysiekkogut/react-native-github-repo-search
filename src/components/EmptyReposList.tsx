import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class EmptyReposList extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text>No repos found.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 12,
  },
});
