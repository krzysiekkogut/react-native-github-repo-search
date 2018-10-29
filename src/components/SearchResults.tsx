import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';

import { ReposState } from '../redux/reducer';

import { EmptyReposList } from './EmptyReposList';
import { ReposListItem } from './ReposListItem';

interface Props {
  repos: string[];
}

export class SearchResults extends React.Component<Props> {
  render() {
    const { repos } = this.props;

    return (
      <FlatList
        data={repos}
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

const mapStateToProps = (state: ReposState) => {
  return { repos: [...state.repos] };
};

export default connect(mapStateToProps)(SearchResults);
