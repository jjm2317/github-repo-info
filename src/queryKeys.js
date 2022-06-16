export const RepositoryKeys = {
  all: () => ['github', 'repository'],
  search_list: (query) => [...RepositoryKeys.all(), 'list', query],
};

export const IssueKeys = {
  all: () => ['github', 'issue'],
  list: (page) => [...IssueKeys.all(), 'list', page],
};
