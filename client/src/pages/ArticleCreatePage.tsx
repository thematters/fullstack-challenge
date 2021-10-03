/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useCallback, useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';
import Back from '../components/Back'
import ArticleForm from '../components/ArticleForm'
import { gql, useMutation } from '@apollo/client';
import { context as NotificationContext } from '../components/Notification'

const CREATE_ARTICLE = gql`
  mutation CREATE_ARTICLE($title: String!, $content: String!) {
    createArticle(data: { title: $title, content: $content }) { id }
  }
`;

const ArticleCreatePage = () => {
  const history = useHistory();
  const context = useContext(NotificationContext);
  const [createArticle, { data, loading, error }] = useMutation(CREATE_ARTICLE, {
    refetchQueries: [
      'GET_ARTICLE_PAGE'
    ],
  });
  const onSubmit = useCallback((value) => {
    createArticle({
      variables: {
        title: value.title,
        content: value.content,
      }
    })
  }, [])
  useEffect(() => {
    if (error) {
      context.current?.notificate({
        type: 'ERROR',
        message: 'Save Failure',
        time: 2000
      })
    }
    if (data) {
      context.current?.notificate({
        type: 'SUCCESS',
        message: 'Save Success',
        time: 2000
      })
      history.replace(`/edit/${data.createArticle.id}`);
    }
  }, [data, error])
  return (
    <React.Fragment>
      <Helmet>
        <title>Create: Article</title>
      </Helmet>
      <div css={{
        padding: '0 30px 60px',
        width: '100%',
        height: '100%',
      }}>
        <div css={{ padding: '16px 0' }}>
          <Back />
          <h2 css={{
            display: 'inline',
            marginLeft: '32px',
          }}>
              Create: Article
          </h2>
        </div>
        <ArticleForm
          isLoading={loading}
          onSubmit={onSubmit}
        />
      </div>
    </React.Fragment>
  )
}

export default ArticleCreatePage
