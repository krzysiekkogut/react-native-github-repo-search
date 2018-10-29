import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

import { reducer } from './redux/reducer';
import { GithubRepos } from './containers/GithubRepos';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GithubRepos />
      </Provider>
    );
  }
}
