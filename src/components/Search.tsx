import React from 'react';
import { View, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ReposState } from '../redux/types';
import { fetchRepos, clearRepos } from '../redux/actions';

import { ErrorText } from './ErrorText';

interface Actions {
  fetchRepos: Function;
  clearRepos: Function;
}

interface Props {
  loading: boolean;
}

export class Search extends React.Component<Props & Actions> {
  state = { error: '' };

  private timeoutId?: number;

  private onChangeText = (searchText: string) => {
    clearTimeout(this.timeoutId);

    if (searchText && searchText.toLocaleLowerCase() !== searchText) {
      this.setState({ error: 'Capital letters are not allowed.' });
    } else {
      this.setState({ error: '' });
    }

    this.timeoutId = setTimeout(() => {
      if (searchText === '') {
        this.props.clearRepos();
        return;
      }

      if (searchText.toLocaleLowerCase() === searchText) {
        this.props.fetchRepos(searchText);
        return;
      }
    }, 500);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.searchInput}
            placeholder='Repository name'
            onChangeText={this.onChangeText}
          />
          {this.props.loading && <ActivityIndicator size='small' style={styles.spinner} />}
        </View>
        {!!this.state.error && <ErrorText error={this.state.error} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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

const mapDispatchToProps = { fetchRepos, clearRepos };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
