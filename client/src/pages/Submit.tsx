import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { Redirect } from 'react-router-dom';
import { useAddArticle } from '../gqls/article';
import { useForm } from '../hooks';

const INIT_STATE = {
  title: '',
  content: '',
};

export const Submit: React.FC = () => {
  const [addArticle, { data }] = useAddArticle();
  const {
    values,
    handleChange,
    handleSubmit,
  } = useForm(INIT_STATE, async () => {
    await addArticle({ variables: { input: values } });

    console.log({ data });

    return <Redirect to="/" />;
  });

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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Submit;
