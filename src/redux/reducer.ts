const REPOS_LOAD = 'repos/LOAD';
const REPOS_LOAD_SUCCESS = 'repos/LOAD_SUCCESS';
const REPOS_LOAD_FAIL = 'repos/LOAD_FAIL';
const REPOS_CLEAR = 'repos/CLEAR';
const REPOS_VALIDATION_ERROR = 'repos/VALIDATION_ERROR';
const REPOS_SELECT_REPO = 'repos/SELECT_REPO';
const REPOS_UNSELECT_REPO = 'repos/UNSELECT_REPO';

export interface RepoDetails {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
  created_at: Date;
  stargazers_count: number;
}

export interface ReposState {
  repos: RepoDetails[];
  selectedRepos: RepoDetails[];
  error: string | null
  loading: boolean;
}

const initialState: ReposState = {
  loading: false,
  error: null,
  repos: [],
  selectedRepos: [],
};

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

export function showValidationError(query: string) {
  return {
    type: REPOS_VALIDATION_ERROR,
    query
  };
}

export function selectRepo(repo: RepoDetails) {
  return {
    type: REPOS_SELECT_REPO,
    repo,
  };
}

export function unselectRepo (repo: RepoDetails) {
  return {
    type: REPOS_UNSELECT_REPO,
    repo,
  };
}

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
    case REPOS_VALIDATION_ERROR:
      return { ...state, error: 'Capital letters are not allowed.', selectedRepos: [] };
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