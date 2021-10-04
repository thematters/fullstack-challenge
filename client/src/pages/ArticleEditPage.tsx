/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useCallback, useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet'
import Back from '../components/Back'
import ArticleForm from '../components/ArticleForm'
import { useParams } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client';
import { context as NotificationContext } from '../components/Notification'
import Warning from '../components/Warning'

const GET_ARTICLE = gql`
  query Article($id: String!) {
    article(id: $id) {
      id
      title
      content
      createdTimestamp
    }
  }
`;

const UPDATE_ARTICLE = gql`
  mutation UPDATE($id: String!, $title: String!, $content: String!) {
    updateArticle(id: $id, data: { title: $title, content: $content }) {
      id
    }
  }
`;

const ArticleEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const context = useContext(NotificationContext);
  const {
    loading: queryLoading,
    error: queryError,
    data,
    refetch
  } = useQuery(GET_ARTICLE, {
    variables: { id },
  });
  const [updateArticle, {
    data: updateResult,
    loading: updateLoading,
    error: updateError
  }] = useMutation(UPDATE_ARTICLE, {
    notifyOnNetworkStatusChange: true,
    refetchQueries: [
      GET_ARTICLE,
    ],
  });
  const onSubmit = useCallback((value) => {
    updateArticle({
      notifyOnNetworkStatusChange: true,
      variables: {
        id: value.id,
        title: value.title,
        content: value.content,
      }
    })
  }, [])
  useEffect(() => { refetch() }, [id])
  useEffect(() => {
    if (updateError) {
      context.current?.notificate({
        type: 'ERROR',
        message: 'Update Failure',
        time: 2000
      })
    }
    if (updateResult) {
      context.current?.notificate({
        type: 'SUCCESS',
        message: 'Update Success',
        time: 2000
      })
    }
  }, [updateResult, updateError])
  return (
    <React.Fragment>
      <Helmet>
        <title>Edit: Article</title>
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
              Edit: Article
          </h2>
        </div>
        {queryError && (
          <Warning
            containerCss={{ height: '300px' }}
            imageCss={{ width: '150px' }}
            message={queryError?.message}
          />
        )}
        {(!queryError) && (
          <ArticleForm
            value={data?.article ?? {}}
            isLoading={queryLoading || updateLoading}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </React.Fragment>
  )
}

export default ArticleEditPage
