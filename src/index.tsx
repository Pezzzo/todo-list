import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/app/App';

import { defaultTheme } from './theme/default';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>
);

