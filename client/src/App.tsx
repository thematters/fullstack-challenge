import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { MyNav } from './components';
import { Pages } from './pages';

const client = new ApolloClient({
  uri: process.env.GQL_URL || 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <MyNav />

      <Pages />
    </Router>
  </ApolloProvider>
);

export default App;
