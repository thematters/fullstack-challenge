import React from 'react';
import {
  Alert,
  ListGroup,
  ButtonGroup,
  Button,
} from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import { useArticles } from '../hooks';

const PAGE_SIZE = 5;

export const Articles: React.FC = () => {
  const {
    loading,
    error,
    data,
    fetchMore: listArticles,
  } = useArticles({ first: PAGE_SIZE });

  if (loading) return <p>Loading...</p>;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  const { nodes = [], pageInfo } = data?.articles || {};
  if (!nodes.length) return <p>No Articles</p>;

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
              last: PAGE_SIZE,
              before: nodes[0].id,
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
              first: PAGE_SIZE,
              after: nodes[nodes.length - 1].id,
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
          {PAGE_SIZE}
        </small>
      </p>
    </>
  );
};

export default Articles;
