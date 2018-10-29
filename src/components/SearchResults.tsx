import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';

import { ReposState } from '../redux/reducer';

import { EmptyReposList } from './EmptyReposList';
import { ReposListItem } from './ReposListItem';
import { ErrorText } from './ErrorText';

interface Props {
  repos: string[];
  error: string | null;
}

export class SearchResults extends React.Component<Props> {
  render() {
    const { repos, error } = this.props;

    return error
      ? <ErrorText error={error} />
      : <FlatList
        data={repos}
        renderItem={({ item }) => <ReposListItem repo={item} />}
        keyExtractor={item => item}
        ListEmptyComponent={<EmptyReposList />}
        style={styles.list}
      />
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  
});

const mapStateToProps = (state: ReposState): Props => {
  return {
    repos: [...state.repos],
    error: state.error,
  };
};

export default connect(mapStateToProps)(SearchResults);
