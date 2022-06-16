import { useState } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Container from 'components/Container';
import Pagination from 'components/Pagination';
import Typography from 'components/Typography';
import IssueList from 'pages/issue/components/IssueList';
import useIssueQuery from 'query/issue';

const IssuePage = () => {
  const { owner, repository } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const curPage = searchParams.get('page');
  const { data: issueList } = useIssueQuery({
    owner,
    repo: repository,
    page: curPage || 1,
  });

  return (
    <Container>
      <Typography as="h1" type="h2">
        {owner}/{repository} issues
      </Typography>
      <IssueList issueList={issueList} />
      <PageWrapper>
        <Pagination
          curPage={curPage ? Number(curPage) : 1}
          pageNum={pageNum}
          paginationLen={1}
          setCurPage={(nextPage) => {
            setSearchParams({ ...searchParams, page: nextPage });
            if (Number(nextPage) === pageNum) {
              setPageNum(pageNum + 1);
            }
          }}
        />
      </PageWrapper>
    </Container>
  );
};

export default IssuePage;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
