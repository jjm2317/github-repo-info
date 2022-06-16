import PropTypes from 'prop-types';
import styled from 'styled-components';

import Pagination from 'components/Pagination';
import GithubPropTypes from 'model/GithubPropTypes';
import IssueItem from 'pages/issue/components/issueItem';

const IssueList = ({ issueList }) => (
  <List>
    {issueList.map((issue) => (
      <IssueItem key={issue.id} issue={issue} />
    ))}
    <Pagination curPage={1} pageNum={4} setCurPage={() => {}} />
  </List>
);

export default IssueList;

IssueList.propTypes = {
  issueList: PropTypes.arrayOf(GithubPropTypes.issue).isRequired,
};

const List = styled.ul``;
