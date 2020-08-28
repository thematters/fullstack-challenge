/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams, RouteComponentProps } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import { ArticleDetail } from '../components';
import { useArticle } from '../hooks';

interface ArticleProps extends RouteComponentProps {}

export const Article: React.FC<ArticleProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useArticle({ id });

  if (loading) return <p>Loading...</p>;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  if (!data?.article) return null;

  return (
    <ArticleDetail
      title={data.article.title}
      content={data.article.content || ''}
      ts={data.article.createdAt || ''}
    />
  );
};

export default Article;
