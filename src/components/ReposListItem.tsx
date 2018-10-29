import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  repo: string;
};

export class ReposListItem extends React.Component<Props> {
  render() {
    const { repo } = this.props;
    return (
      <View key={repo} style={styles.listItem}>
        <Text>{repo}</Text>
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
  },
});
