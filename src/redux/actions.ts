import {
  REPOS_LOAD,
  REPOS_CLEAR,
  REPOS_SELECT_REPO,
  REPOS_UNSELECT_REPO,
} from './constants';
import { RepoDetails } from './types';

export function fetchRepos(query: string) {
  return {
    type: REPOS_LOAD,
    payload: {
      request: {
        url: `/search/repositories?q=${query}`,
      },
    },
    query,
  };
}

export function clearRepos() {
  return {
    type: REPOS_CLEAR,
  };
}

export function selectRepo(repo: RepoDetails) {
  return {
    type: REPOS_SELECT_REPO,
    repo,
  };
}

export function unselectRepo(repo: RepoDetails) {
  return {
    type: REPOS_UNSELECT_REPO,
    repo,
  };
}
