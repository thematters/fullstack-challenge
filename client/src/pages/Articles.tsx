import React, { useEffect } from 'react';
import {
  Alert, ListGroup, ButtonGroup, Button,
} from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import { useLazyArticles } from '../gqls/article';

const SIZE = 5;

export const Articles: React.FC = () => {
  const [listArticles, { loading, error, data }] = useLazyArticles({ first: SIZE });

  useEffect(() => {
    listArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  const { nodes = [], pageInfo } = data?.articles || {};

  if (!pageInfo?.total) return <p>No Articles</p>;

  return (
    <>
      {nodes.map(({ id, title }) => (
        <ListGroup key={id}>
          <Link to={`articles/${id}`}>
            <ListGroup.Item action>
              {title}
            </ListGroup.Item>
          </Link>
        </ListGroup>
      ))}

      <ButtonGroup className="mt-2">
        <Button
          variant="light"
          onClick={() => listArticles({
            variables: {
              last: SIZE, before: nodes[0].id,
            },
          })}
          disabled={!pageInfo?.hasPrev}
        >
          Prev
        </Button>
        <Button
          variant="light"
          onClick={() => listArticles({
            variables: {
              first: SIZE, after: nodes[nodes.length - 1].id,
            },
          })}
          disabled={!pageInfo?.hasNext}
        >
          Next
        </Button>
      </ButtonGroup>

      <p className="text-right">
        <small>
          Page size:
          {' '}
          {SIZE}
        </small>
      </p>
    </>
  );
};

export default Articles;
