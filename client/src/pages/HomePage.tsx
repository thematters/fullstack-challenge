/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams, Link, useHistory } from 'react-router-dom';
import PagingTable from '../components/PagingTable'
import { ArticlePreviewInfo } from '../definitions/Model.d'

const HomePage = () => {
  const { page = 1 } = useParams<{ page: string }>();
  const history = useHistory();
  return (
    <React.Fragment>
      <Helmet>
        <title>Home: List Article</title>
      </Helmet>
      <div css={{
        padding: '60px 30px',
        width: '100%',
        height: '100%',
      }}>
        <div css={{ textAlign: 'right', padding: '8px' }}>
          <Link
            to="/create"
            css={{
              textDecoration: 'none',
              display: 'inline-block',
              borderRadius: '4px',
              padding: '8px',
              background: 'white',
              border: '1px solid #ccc',
              cursor: 'pointer',
              color: 'black',
            }}
          >
            + Add Article
          </Link>
        </div>
        <PagingTable<ArticlePreviewInfo>
          tableProp={{
            columns: [
              {
                referencedDataPropertyName: 'id',
                title: 'ID',
                headCSS: {
                  width: '100px',
                  textAlign: 'left'
                },
                cellCSS: {
                  padding: '8px 16px',
                }
              },
              {
                referencedDataPropertyName: 'title',
                title: 'Title',
                headCSS: {
                  textAlign: 'left'
                },
                cellCSS: {
                  padding: '8px 16px',
                },
                renderCell: (value, record) => <Link to={`/edit/${record.id}`}>{value}</Link>
              },
              {
                referencedDataPropertyName: 'createdTimestamp',
                title: 'Create Time',
                headCSS: {
                  width: '200px',
                  textAlign: 'left'
                },
                cellCSS: {
                  padding: '8px 16px',
                },
                renderCell: (data) => (`${(new Date(data)).toLocaleDateString()
                  } ${(new Date(data)).toLocaleTimeString()
                  }`
                )
              }
            ],
            rowKey: 'id',
            data: [
              { id: 1, title: 'Title 1', createdTimestamp: Date.now() },
              { id: 2, title: 'Title 2', createdTimestamp: Date.now() },
              { id: 3, title: 'Title 3', createdTimestamp: Date.now() },
              { id: 4, title: 'Title 4', createdTimestamp: Date.now() },
              { id: 5, title: 'Title 5', createdTimestamp: Date.now() },
              { id: 6, title: 'Title 6', createdTimestamp: Date.now() },
              { id: 7, title: 'Title 7', createdTimestamp: Date.now() },
              { id: 8, title: 'Title 8', createdTimestamp: Date.now() },
              { id: 9, title: 'Title 9', createdTimestamp: Date.now() },
              { id: 10, title: 'Title 10', createdTimestamp: Date.now() }
            ],
            // onClickRow: (data) => { console.log(data) }
          }}
          paginationProps={{
            currentPage: 1,
            finalPage: 100,
            getHref: (page) => `/${page}`,
            onChange: (page) => { history.push(`/${page}`); }
          }}
          // isLoading={true}
        />
      </div>
    </React.Fragment>
  )
}

export default HomePage
