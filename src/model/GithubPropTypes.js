import PropTypes from 'prop-types';

const repository = PropTypes.shape({
  full_name: PropTypes.string,
  id: PropTypes.number,
});

const issue = PropTypes.shape({
  id: PropTypes.number,
  state: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
});

const GithubPropTypes = {
  repository,
  issue,
};

export default GithubPropTypes;
