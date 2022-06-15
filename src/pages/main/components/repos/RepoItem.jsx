import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';
import GithubPropTypes from 'model/GithubPropTypes';

const RepoItem = ({ repo, onIssueButtonClick, onDeleteButtonClick }) => (
  <Item>
    <Typography type="b1">{repo.full_name}</Typography>
    <ButtonContainer>
      <Button onClick={onIssueButtonClick}>이슈 보기</Button>
      <Button
        bgColor="lightgrey"
        textColor="grey"
        onClick={onDeleteButtonClick}
      >
        삭제
      </Button>
    </ButtonContainer>
  </Item>
);

export default RepoItem;

RepoItem.propTypes = {
  repo: GithubPropTypes.repository.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onIssueButtonClick: PropTypes.func.isRequired,
};

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
