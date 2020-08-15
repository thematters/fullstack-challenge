// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

export const Article: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      {id}
    </div>
  );
};

export default Article;
