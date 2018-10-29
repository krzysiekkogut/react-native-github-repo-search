import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Title } from '../components/Title';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';

export class GithubRepos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Search />
        <SearchResults />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 48,
    alignItems: 'center',
  },
});
