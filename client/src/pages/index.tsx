import React from 'react';
import { Container } from 'react-bootstrap';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes';

export const Pages: React.FC = () => (
  <Container>
    {renderRoutes(routes)}
  </Container>
);

export default Pages;
