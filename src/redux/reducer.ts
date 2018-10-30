import {
  REPOS_LOAD,
  REPOS_LOAD_SUCCESS,
  REPOS_LOAD_FAIL,
  REPOS_CLEAR,
  REPOS_SELECT_REPO,
  REPOS_UNSELECT_REPO,
} from './constants';

import { ReposState } from './types';

const initialState: ReposState = {
  loading: false,
  error: null,
  repos: [],
  selectedRepos: [],
};

export function reducer(state = initialState, action: any): ReposState {
  switch (action.type) {
    case REPOS_LOAD:
      return { ...state, loading: true };
    case REPOS_LOAD_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data.items || [], error: null, selectedRepos: [] };
    case REPOS_LOAD_FAIL:
      return { ...state, loading: false, repos: [], error: action.error.response.data.message, selectedRepos: [] };
    case REPOS_CLEAR:
      return { ...state, loading: false, repos: [], error: null, selectedRepos: [] };
    case REPOS_SELECT_REPO:
      return {
        ...state,
        selectedRepos: state.selectedRepos.concat(action.repo),
      }
    case REPOS_UNSELECT_REPO:
      return {
        ...state,
        selectedRepos: state.selectedRepos.filter(repo => repo.id !== action.repo.id),
      };
    default:
      return state;
  }
}