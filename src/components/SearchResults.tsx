import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';

import { ReposState, RepoDetails, selectRepo, unselectRepo } from '../redux/reducer';

import { EmptyReposList } from './EmptyReposList';
import { ReposListItem } from './ReposListItem';
import { ErrorText } from './ErrorText';

interface Props {
  repos: RepoDetails[];
  selectedRepos: RepoDetails[];
  error: string | null;
}

interface Actions {
  selectRepo: Function;
  unselectRepo: Function;
}

export class SearchResults extends React.Component<Props & Actions> {
  private onItemPress = (repo: RepoDetails) => this.isRepoSelected(repo)
    ? this.props.unselectRepo(repo)
    : this.props.selectRepo(repo);

  private isRepoSelected = (repo: RepoDetails) : boolean => this.props.selectedRepos.map(repo => repo.id).indexOf(repo.id) >= 0;

  render() {
    const { repos, error } = this.props;

    return error
      ? <ErrorText error={error} />
      : <FlatList
        data={repos}
        renderItem={({ item }) => <ReposListItem repo={item} isSelected={this.isRepoSelected(item)} onPress={this.onItemPress} />}
        keyExtractor={repo => `${repo.id}`}
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
    repos: [...state.repos].sort((a, b) => a.created_at < b.created_at ? 1 : -1),
    selectedRepos: [...state.selectedRepos],
    error: state.error,
  };
};

const mapDispatchToProps = { selectRepo, unselectRepo };

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
