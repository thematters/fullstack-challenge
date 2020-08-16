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
  if (!data?.articles.pageInfo.total) return <p>No Articles</p>;

  return (
    <>
      {data?.articles.nodes.map(({ id, title }) => (
        <ListGroup key={id}>
          <Link to={`articles/${id}`}>
            <ListGroup.Item action>
              {title}
            </ListGroup.Item>
          </Link>
        </ListGroup>
      ))}

      <ButtonGroup className="mt-2">
        <Button variant="light">Prev</Button>
        <Button
          variant="light"
          onClick={() => listArticles({
            variables: { after: data?.articles.nodes[data?.articles.nodes.length - 1].id },
          })}
          disabled={!data?.articles.pageInfo.hasNext}
        >
          Next
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Articles;
