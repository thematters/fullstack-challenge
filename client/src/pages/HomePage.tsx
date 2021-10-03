/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams, Link, useHistory } from 'react-router-dom';
import PagingTable from '../components/PagingTable'
import { ArticlePreviewInfo } from '../definitions/Model.d'
import { gql, useQuery } from '@apollo/client';
import Warning from '../components/Warning'

const PAGE_SIZE = 10;

const GET_ARTICLE_PAGE = gql`
  query GET_ARTICLE_PAGE($page: Int!, $pageSize: Int!) {
    articles(pagination: { page: $page, pageSize: $pageSize }) {
      list {
        ... on Article {
          id
          title
          createdTimestamp
        }
      }
      total
    }
  }
`;

const HomePage = () => {
  const { page = 1 } = useParams<{ page: string }>();
  const { loading, error, data, refetch } = useQuery(GET_ARTICLE_PAGE, {
    variables: { page: Number(page), pageSize: PAGE_SIZE },
  });
  useEffect(() => { refetch() }, [page])
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
        <div>
          {error && (
            <Warning
              containerCss={{ height: '100%' }}
              imageCss={{ width: '150px' }}
              message={error?.message}
            />
          )}
          {(!error && data) && (
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
                data: data?.articles.list ?? [],
              }}
              paginationProps={{
                currentPage: Number(page),
                finalPage: (
                  Math.floor((data?.articles.total ?? 0) / PAGE_SIZE) +
                  ((data?.articles.total ?? 0) % PAGE_SIZE ? 1 : 0)
                ),
                getHref: (page) => `/${page}`,
                onChange: (page) => { history.push(`/${page}`); }
              }}
              isLoading={loading}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePage
