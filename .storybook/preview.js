import theme from 'styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import 'styles/index.css';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Story />
      </Wrapper>
    </ThemeProvider>
  ),
];

const Wrapper = styled.div`
  max-width: 400px;
`;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
