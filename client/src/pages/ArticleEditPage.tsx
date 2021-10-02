/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import Back from '../components/Back'
import ArticleForm from '../components/ArticleForm'
import { useParams } from 'react-router-dom'

const ArticleEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [state, setState] = useState({
    id: 1,
    title: 'title 1',
    content: 'title 1 content',
    createdTimestamp: Date.now()
  })
  const onSubmit = useCallback((value) => {
    console.log(value)
  }, [])
  return (
    <React.Fragment>
      <Helmet>
        <title>Edit: Article</title>
      </Helmet>
      <div css={{
        padding: '0 60px 30px',
        width: '100%',
        height: '100%',
      }}>
        <div css={{ padding: '16px 0' }}>
          <Back />
        </div>
        <ArticleForm
          value={state}
          onSubmit={onSubmit}
        />

        <button onClick={() => setState({
          id: 2,
          title: 'title 2',
          content: 'title 2 content',
          createdTimestamp: Date.now()
        })}>click</button>
      </div>
    </React.Fragment>
  )
}

export default ArticleEditPage
