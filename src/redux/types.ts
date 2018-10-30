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
