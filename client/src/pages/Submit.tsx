import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

import { useForm, useAddArticle } from '../hooks';

const INIT_STATE = {
  title: '',
  content: '',
};

export const Submit: React.FC = () => {
  const history = useHistory();
  const [addArticle, { loading, error }] = useAddArticle();
  const {
    values,
    handleChange,
    handleSubmit,
  } = useForm({
    initValues: INIT_STATE,
    onSubmit: async (input) => {
      await addArticle({ variables: { input } });
      history.push('/');
    },
  });

  if (error) {
    return (
      <Alert variant="danger">
        Error:
        {error.message}
      </Alert>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
          required
          value={values.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          rows={10}
          placeholder="Some Content..."
          value={values.content}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        type="submit"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Submit'}
      </Button>
    </Form>
  );
};

export default Submit;
