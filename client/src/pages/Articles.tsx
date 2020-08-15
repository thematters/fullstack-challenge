import React from 'react';

// eslint-disable-next-line no-unused-vars
import { useArticles } from '../gqls/article';

export const Articles: React.FC = () => {
  const { loading, error, data } = useArticles();

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return data?.articles.map(({ id, title, content }) => (
    <div key={id}>
      {title}
      <br />
      {content}
    </div>
  )) || <p>No Article</p>;
};

export default Articles;
