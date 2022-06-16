export const RepositoryKeys = {
  all: () => ['github', 'repository'],
  search_list: (query) => [...RepositoryKeys.all(), 'list', query],
};

export const IssueKeys = {
  all: () => ['github', 'issue'],
  list: (owner, repo, page) => [...IssueKeys.all(), 'list', owner, repo, page],
};
