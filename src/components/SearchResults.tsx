import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { EmptyReposList } from './EmptyReposList';
import { ReposListItem } from './ReposListItem';

const data: string[] = [
  'react-native',
  'cypress-first-steps',
  'angular',
  'react-redux',
  'lodash',
];

export class SearchResults extends React.Component {
  render() {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <ReposListItem repo={item} />}
        keyExtractor={item => item}
        ListEmptyComponent={<EmptyReposList />}
        style={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});
