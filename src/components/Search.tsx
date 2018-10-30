import React from 'react';
import { View, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ReposState } from '../redux/types';
import { fetchRepos, clearRepos, showValidationError } from '../redux/actions';

interface Actions {
  fetchRepos: Function;
  clearRepos: Function;
  showValidationError: Function;
}

interface Props {
  loading: boolean;
}

export class Search extends React.Component<Props & Actions> {
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
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder='Repository name'
          onChangeText={this.onChangeText}
        />
        {this.props.loading && <ActivityIndicator size='small' style={styles.spinner} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  searchInput: {
    flex: 0.8,
  },
  spinner: {
    flex: 0.2,
  },
});

const mapStateToProps = (state: ReposState): Props => {
  return { loading: state.loading };
};

const mapDispatchToProps = { fetchRepos, clearRepos, showValidationError };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
