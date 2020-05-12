import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyles from './styles/global';
import AppProvider from './hooks';
import store from './store';

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Provider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
