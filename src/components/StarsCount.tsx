import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ReposState, RepoDetails } from '../redux/reducer';

interface Props {
  selectedRepos: RepoDetails[];
}

export class StarsCount extends React.Component<Props> {
  render() {
    const totalStars = this.props.selectedRepos.map(r => r.stargazers_count).reduce((prev, curr) => prev + curr, 0);

    return (
      <View style={styles.container}>
        <Text>
          <Text style={styles.bold}>Selected repos total stars count:</Text>
          {` ${totalStars}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: 'flex-end',
  },
  bold: {
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state: ReposState): Props => {
  return {
    selectedRepos: [...state.selectedRepos],
  };
};

export default connect(mapStateToProps)(StarsCount);
