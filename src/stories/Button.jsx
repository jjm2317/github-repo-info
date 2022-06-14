import PropTypes from 'prop-types';

import Typography from 'components/Typography';

import 'stories/button.css';

/**
 * Primary UI component for user interaction
 */
const Button = ({ isPrimary, backgroundColor, size, label, onClick }) => {
  const mode = isPrimary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      style={backgroundColor && { backgroundColor }}
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      onClick={onClick}
    >
      <Typography type="h3">{label}</Typography>
    </button>
  );
};
export default Button;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  isPrimary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  isPrimary: false,
  size: 'medium',
  onClick: undefined,
};
