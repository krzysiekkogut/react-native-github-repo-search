import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const EmptyReposList = () => {
  return (
    <View style={styles.listItem}>
      <Text>No repos found.</Text>
    </View>
  );
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
