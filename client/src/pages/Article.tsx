/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams, RouteComponentProps } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';

import { useArticle } from '../hooks';

interface ArticleProps extends RouteComponentProps {}

export const Article: React.FC<ArticleProps> = () => {
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
