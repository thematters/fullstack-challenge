/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import Back from '../components/Back'
import ArticleForm from '../components/ArticleForm'

const ArticleCreatePage = () => {
  const onSubmit = useCallback((value) => {
    console.log(value)
  }, [])
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
        </div>
        <ArticleForm
          onSubmit={onSubmit}
        />
      </div>
    </React.Fragment>
  )
}

export default ArticleCreatePage
