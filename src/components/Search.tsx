import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ReposState } from '../redux/reducer';

import { fetchRepos, clearRepos, showValidationError } from '../redux/reducer';

interface Props {
  fetchRepos: Function;
  clearRepos: Function;
  showValidationError: Function;
}

export class Search extends React.Component<Props> {
  private timeoutId?: number;

  private onChangeText = (searchText: string) => {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      if (searchText === '') {
        this.props.clearRepos();
        return;
      }
  
      if (searchText.toLocaleLowerCase() === searchText) {
        this.props.fetchRepos(searchText);
        return;
      }
  
      this.props.showValidationError(searchText);
    }, 500);
  }

  render() {

    return (
      <TextInput
        style={styles.searchInput}
        placeholder='Repository name'
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

const mapDispatchToProps = { fetchRepos, clearRepos, showValidationError };

export default connect(null, mapDispatchToProps)(Search);
