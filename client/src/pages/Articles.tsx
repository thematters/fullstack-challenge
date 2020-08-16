import React from 'react';
import { Alert, ListGroup } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import { useArticles } from '../gqls/article';

export const Articles: React.FC = () => {
  const { loading, error, data } = useArticles();

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <Alert variant="danger">
        Error:
        {error.message}
      </Alert>
    );
  }
  if (!data?.articles.length) return <p>No Articles</p>;

  return data?.articles.map(({ id, title }) => (
    <ListGroup key={id}>
      <Link to={`articles/${id}`}>
        <ListGroup.Item action>
          {title}
        </ListGroup.Item>
      </Link>
    </ListGroup>
  ));
};

export default Articles;
