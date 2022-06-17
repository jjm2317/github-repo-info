import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Typography from 'components/Typography';
import GithubPropTypes from 'model/GithubPropTypes';
import RepoItem from 'pages/main/components/repos/RepoItem';

const RepoList = ({ repoList, setRepoList }) => {
  const navigate = useNavigate();

  const handleIssueButtonClick = (repoName) => () => {
    navigate(`/repos/${repoName}`);
  };

  const handleDeleteButtonClick = (repoId) => () => {
    setRepoList((repos) => repos.filter((repo) => repo.id !== repoId));
  };

  return (
    <Container>
      <Typography as="h2" type="h2">
        등록한 repository
      </Typography>
      {repoList && (
        <List>
          {repoList.length ? (
            repoList.map((repo) => (
              <RepoItem
                key={repo.id}
                repo={repo}
                onDeleteButtonClick={handleDeleteButtonClick(repo.id)}
                onIssueButtonClick={handleIssueButtonClick(repo.full_name)}
              />
            ))
          ) : (
            <MessageWrapper>
              <Typography type="b1">repository를 등록해주세요!</Typography>
            </MessageWrapper>
          )}
        </List>
      )}
    </Container>
  );
};

export default RepoList;

RepoList.propTypes = {
  repoList: PropTypes.arrayOf(GithubPropTypes.repository).isRequired,
  setRepoList: PropTypes.func.isRequired,
};

const Container = styled.section`
  margin-top: 150px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
