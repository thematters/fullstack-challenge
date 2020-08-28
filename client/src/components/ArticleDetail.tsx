/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Card } from 'react-bootstrap';

interface ArticleDetailProps {
  title?: string;
  content?: string;
  ts?: string;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  title,
  content,
  ts,
}: ArticleDetailProps) => (
  <Card>
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <p>
        {content}
      </p>
      <small className="text-muted">{ts}</small>
    </Card.Body>
  </Card>
);

export default ArticleDetail;
