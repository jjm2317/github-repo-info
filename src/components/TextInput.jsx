import styled from 'styled-components';

const TextInput = styled.input`
  ${({ theme }) => theme.typography.b1}
  width:100%;
  padding: 5px 12px;
  border: 1px solid ${({ theme }) => theme.color.grey};
`;

export default TextInput;
