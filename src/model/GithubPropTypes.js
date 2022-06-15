import PropTypes from 'prop-types';

const repository = PropTypes.shape({
  full_name: PropTypes.string,
  id: PropTypes.number,
});

const GithubPropTypes = {
  repository,
};

export default GithubPropTypes;
