import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { PaletteMapper, SpacingMapper } from '../styles/theme';

const Typography = styled.span`
  ${({ theme, type }) => theme.typography[type]};
  font-family: Pretendard;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color, theme }) => PaletteMapper({ color, theme })};
  display: block;
  margin: ${(props) => SpacingMapper('margin', props)};
  padding: ${(props) => SpacingMapper('padding', props)};
  ${({ letterSpacing }) =>
    letterSpacing &&
    css`
      letter-spacing: ${letterSpacing}px;
    `}
`;
export default Typography;

Typography.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800]),
  letterSpacing: PropTypes.number,
  margin: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginX: PropTypes.number,
  marginY: PropTypes.number,
  mode: PropTypes.oneOf(['light', 'dark']),
  padding: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  type: PropTypes.oneOf(['h1', 'h2', 'subtitle1', 'b1', 'b2', 'caption'])
    .isRequired,
};
