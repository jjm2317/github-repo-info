import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 12px;
  font-family: Pretendard;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.color.bg_dark};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

export default Button;
