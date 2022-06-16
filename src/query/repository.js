import { useEffect, useState } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';

import { RepositoryKeys } from 'queryKeys';

const getRepository = async (query) => {
  const { data } = await axios.get(
    `https://api.github.com/search/repositories`,
    {
      params: {
        q: query,
      },
    }
  );
  return data;
};

const useRepositoryQuery = (query) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const delay = 500;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query, delay]);

  return useQuery(
    RepositoryKeys.search_list(debouncedQuery),
    () => getRepository(debouncedQuery),
    {
      enabled: !!debouncedQuery,
      select: (result) => result?.items,
    }
  );
};

export default useRepositoryQuery;
