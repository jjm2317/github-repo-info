import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Typography from 'components/Typography';
import GithubPropTypes from 'model/GithubPropTypes';

const IssueItem = ({ issue }) => {
  const { repository } = useParams();
  return (
    <Item
      onClick={() => {
        window.location.href = issue.html_url;
      }}
    >
      <Typography color="lightgrey" type="b1">
        {repository}
      </Typography>
      <Typography color="grey" type="b1">
        {issue.title}
      </Typography>
    </Item>
  );
};

export default IssueItem;

IssueItem.propTypes = {
  issue: GithubPropTypes.issue.isRequired,
};

const Item = styled.li`
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.lightgrey}aa;
  }
`;
