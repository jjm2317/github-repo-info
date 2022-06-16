import { useParams } from 'react-router-dom';

import Container from 'components/Container';
import IssueList from 'pages/issue/components/IssueList';

const IssuePage = () => {
  const { owner, repository } = useParams();
  const issueList = [
    {
      id: 2,
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      state: 'open',
      title: 'Found a bug',
    },
    {
      id: 1,
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      state: 'open',
      title: 'Found a bug',
    },
  ];
  return (
    <Container>
      <IssueList issueList={issueList} />
    </Container>
  );
};

export default IssuePage;
