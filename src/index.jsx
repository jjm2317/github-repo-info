import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from 'App';
import theme from 'styles/theme';
import 'styles/reset.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
      notifyOnChangeProps: 'tracked',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
