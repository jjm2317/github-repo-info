import axios from 'axios';
import { useQuery } from 'react-query';

import { IssueKeys } from 'queryKeys';

const getIssues = async ({ owner, repo, page, perPage = 10 }) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      params: {
        page,
        per_page: perPage,
      },
    }
  );
  return data;
};

const useIssueQuery = ({ owner, repo, page }) =>
  useQuery(
    IssueKeys.list(owner, repo, page),
    () => getIssues({ owner, repo, page }),
    {
      enabled: !!page,
      select: (result) => result,
    }
  );

export default useIssueQuery;
