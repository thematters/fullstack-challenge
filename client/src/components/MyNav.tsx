import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

export const MyNav: React.FC = () => (
  <Nav as="ul">
    <Nav.Item as="li">
      <Nav.Link as="span">
        <Link to="/">The Articles.</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link as="span">
        <Link to="/articles/submit">Submit</Link>
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default MyNav;
