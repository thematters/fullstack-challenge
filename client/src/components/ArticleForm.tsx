/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useRef, useEffect } from 'react'
import { ArticleDetailInfo } from '../definitions/Model.d'
import Editor from './Editor'
import Loading from './Loading'

interface Props<T extends { [key: string]: any }> {
  value?: T;
  isLoading?: boolean;
  onSubmit: (value: T) => void;
}

type FormRelatedElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | {
  name: string,
  value: string
}
interface FormProviderValue {
  mapNameToEl: Map<string, FormRelatedElement>
  bindRef: (el: FormRelatedElement | null) => void;
}

const ArticleForm = React.memo(({ value, isLoading, onSubmit }: Props<ArticleDetailInfo>) => {
  const inputElsRef = useRef<FormProviderValue>({
    mapNameToEl: new Map<string, FormRelatedElement>(),
    bindRef: (el) => {
      if (el?.name) {
        inputElsRef.current.mapNameToEl.set(el.name, el)
        if (value && el.name in value) {
          el.value = String(value[el.name as keyof ArticleDetailInfo])
        }
      }
    }
  })

  useEffect(() => {
    inputElsRef.current.mapNameToEl.forEach((el, name) => {
      el.value = (value && name in value)
        ? String(value[el.name as keyof ArticleDetailInfo])
        : ''
    })
  }, [value])

  return (
    <div css={{ position: 'relative' }}>
      <form
        css={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onReset={(event) => {
          event.preventDefault()
          inputElsRef.current.mapNameToEl.forEach(el => {
            el.value = ''
          })
        }}
        onSubmit={(event) => {
          event.preventDefault()
          const newValue: ArticleDetailInfo = Array
            .from(inputElsRef.current.mapNameToEl.entries())
            .reduce((res, [key, value]) => {
              res[key] = value.value;
              return res
            }, { ...value } as { [key: string]: any }) as ArticleDetailInfo
          if (Object.values(newValue).every(value => value !== undefined))
            onSubmit(newValue);
        }}
      >
        <label css={{ padding: '8px' }}>
          Title
        </label>
        <input
          css={{
            padding: '8px 16px',
            fontSize: '16px',
            lineHeight: '20px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginBottom: '16px',
          }}
          name="title"
          maxLength={200}
          required
          ref={inputElsRef.current.bindRef}
        />
        <label css={{ padding: '8px' }}>
          Content
        </label>
        <Editor
          name="content"
          containerCss={{ marginBottom: '16px' }}
          required
          ref={inputElsRef.current.bindRef}
        />
        <div css={{ textAlign: 'right' }}>
          <button
            type="reset"
            css={{
              borderRadius: '4px',
              padding: '8px',
              background: 'white',
              border: '1px solid #ccc',
              cursor: 'pointer',
              marginRight: '8px'
            }}
          >
            Clear
          </button>
          <button
            type="submit"
            css={{
              borderRadius: '4px',
              padding: '8px',
              background: 'white',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
      </form>
      {isLoading && (
        <Loading
          containerCss={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.8)',
          }}
          imageCss={{ width: '150px' }}
        />
      )}
    </div>
  )
})

export default ArticleForm