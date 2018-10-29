import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RepoDetails } from '../redux/reducer';

interface Props {
  repo: RepoDetails;
};

export class ReposListItem extends React.Component<Props> {
  render() {
    const { repo } = this.props;
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: repo.owner.avatar_url }} style={{ width: 60, height: 60, }}/>
        <View style={styles.itemDetails}>
          <Text>
            <Text style={styles.bold}>
              Repository:{' '}
            </Text>
            {repo.name}
          </Text>
          <Text>
            <Text style={styles.bold}>
              Owner:{' '}
            </Text>
            {repo.owner.login}
          </Text>
          <Text>
            <Text style={styles.bold}>
              Stars:{' '}  
            </Text>
            {repo.stargazers_count}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    marginTop: 12,
    borderColor: '#000',
    borderWidth: 1,
    flexDirection: 'row',
  },
  itemDetails: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});
