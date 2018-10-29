const REPOS_LOAD = 'repos/LOAD';
const REPOS_LOAD_SUCCESS = 'repos/LOAD_SUCCESS';
const REPOS_LOAD_FAIL = 'repos/LOAD_FAIL';
const REPOS_CLEAR = 'repos/CLEAR';
const REPOS_VALIDATION_ERROR = 'repos/VALIDATION_ERROR';

export interface ReposState {
  repos: string[];
  error: string | null
  loading: boolean;
  search: string;
}

const initialState: ReposState = {
  loading: false,
  error: null,
  repos: [],
  search: '',
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

// TODO: introduce Action Types
export function reducer(state = initialState, action: any): ReposState {
  switch (action.type) {
    case REPOS_LOAD:
      return { ...state, search: action.query, loading: true };
    case REPOS_LOAD_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data || [], error: null };
    case REPOS_LOAD_FAIL:
      return { ...state, loading: false, repos: [], error: action.error.response.data.message };
    case REPOS_CLEAR:
      return { ...state, search: '', loading: false, repos: [], error: '' };
    case REPOS_VALIDATION_ERROR:
      return { ...state, search: action.query, error: 'Capital letters are not allowed.' }
    default:
      return state;
  }
}