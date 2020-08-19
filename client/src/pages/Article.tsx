// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';

import { useArticle } from '../hooks';

export const Article: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useArticle({ id });

  if (loading) return <p>Loading...</p>;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <Card>
      <Card.Header>{data?.article.title}</Card.Header>
      <Card.Body>
        <p>
          {data?.article.content}
        </p>
        <small className="text-muted">{data?.article.createdAt}</small>
      </Card.Body>
    </Card>
  );
};

export default Article;
