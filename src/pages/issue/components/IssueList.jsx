import PropTypes from 'prop-types';
import styled from 'styled-components';

import GithubPropTypes from 'model/GithubPropTypes';
import IssueItem from 'pages/issue/components/issueItem';

const IssueList = ({ issueList = [] }) => (
  <List>
    {issueList.map((issue) => (
      <IssueItem key={issue.id} issue={issue} />
    ))}
  </List>
);

export default IssueList;

IssueList.propTypes = {
  issueList: PropTypes.arrayOf(GithubPropTypes.issue).isRequired,
};

const List = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
  height: 380px;
`;
