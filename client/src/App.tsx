import React from 'react';
import { renderRoutes } from 'react-router-config';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import { Container, Nav } from 'react-bootstrap';

import { routes } from './routes';

export const App: React.FC = () => (
  <Router>
    <Nav as="ul">
      <Nav.Item as="li">
        <Nav.Link as="span">
          <Link to="/">The Articles.</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as="span">
          <Link to="/submit">Submit</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <Container>
      {renderRoutes(routes)}
    </Container>
  </Router>
);

export default App;
