const REPOS_LOAD = 'repos/LOAD';
const REPOS_LOAD_SUCCESS = 'repos/LOAD_SUCCESS';
const REPOS_LOAD_FAIL = 'repos/LOAD_FAIL';

interface ReposAction {
  type: string;
  payload: {
    data?: any[];
    error?: any;
    request?: {
      url: string;
    };
  };
}

export interface ReposState {
  repos: string[];
  error: string | null
  loading: boolean;
}

const initialState: ReposState = {
  loading: false,
  error: null,
  repos: [
    'react-native',
    'cypress-first-steps',
    'angular',
    'react-redux',
    'lodash',
    'kogut',
  ],
};

export function fetchRepos(query: string): ReposAction {
  return {
    type: REPOS_LOAD,
    payload: {
      request: {
        url: `/search/repositoriesBEST/q?=${query}`
      }
    },
  };
}

export function reducer(state = initialState, action: ReposAction): ReposState {
  switch (action.type) {
    case REPOS_LOAD:
      return { ...state, loading: true };
    case REPOS_LOAD_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data || [], error: null };
    case REPOS_LOAD_FAIL:
      return { ...state, loading: true, repos: [], error: action.payload.error };
    default:
      return state;
  }
}