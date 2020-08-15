import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Container } from 'react-bootstrap';

import { MyNav } from './components';

import { routes } from './routes';

const client = new ApolloClient({
  uri: process.env.GQL_URL || 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <MyNav />

      <Container>
        {renderRoutes(routes)}
      </Container>
    </Router>
  </ApolloProvider>
);

export default App;
