import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ReposState } from '../redux/reducer';

import { fetchRepos, clearRepos, showValidationError } from '../redux/reducer';

interface Actions {
  fetchRepos: Function;
  clearRepos: Function;
  showValidationError: Function;
}

interface Props {
  search: string;
}

export class Search extends React.Component<Props & Actions> {
  private onChangeText = (searchText: string) => {
    if (searchText === '') {
      this.props.clearRepos();
      return; 
    }

    if (searchText.toLocaleLowerCase() === searchText) {
      this.props.fetchRepos(searchText);
      return;
    }

    this.props.showValidationError();
  }

  render() {
    const { search } = this.props;

    return (
      <TextInput
        style={styles.searchInput}
        placeholder='Repository name'
        value={search}
        onChangeText={this.onChangeText}
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

const mapStateToProps = (state: ReposState): Props => {
  return { search: state.search };
}

const mapDispatchToProps = { fetchRepos, clearRepos, showValidationError };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
