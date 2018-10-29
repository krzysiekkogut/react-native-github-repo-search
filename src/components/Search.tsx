import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export class Search extends React.Component {
  render() {
    return (
      <TextInput
        style={styles.searchInput}
        placeholder='Repository name'
      />
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
  },
});
