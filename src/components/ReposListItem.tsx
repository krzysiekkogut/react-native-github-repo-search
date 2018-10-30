import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RepoDetails } from '../redux/reducer';

interface Props {
  repo: RepoDetails;
  isSelected: boolean;
  onPress: Function;
};

export class ReposListItem extends React.Component<Props> {
  render() {
    const { repo, isSelected, onPress } = this.props;
    return (
      <View style={[styles.listItem, isSelected ? styles.selectedListItem : null]}>
        <TouchableOpacity style={styles.touch} onPress={() => onPress(repo)}>
          <Image source={{ uri: repo.owner.avatar_url }} style={{ width: 60, height: 60, }} />
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
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    marginTop: 12,
    borderColor: '#000',
    borderWidth: 1,
  },
  touch: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selectedListItem: {
    backgroundColor: '#dadada',
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
