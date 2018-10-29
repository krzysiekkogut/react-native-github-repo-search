import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

import { reducer } from './src/reducer';
import GithubRepos from './src/GithubRepos';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <GithubRepos />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});