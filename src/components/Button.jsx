import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 12px;
  font-family: Pretendard;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme, bgColor }) =>
    theme.color[bgColor || 'bg_dark']};
  color: ${({ theme, textColor }) => theme.color[textColor || 'white']};
  cursor: pointer;
`;

export default Button;
