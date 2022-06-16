import styled from 'styled-components';

import GithubPropTypes from 'model/GithubPropTypes';

const IssueItem = ({ issue }) => <Item>{issue.id}</Item>;

export default IssueItem;

IssueItem.propTypes = {
  issue: GithubPropTypes.issue.isRequired,
};

const Item = styled.li``;
