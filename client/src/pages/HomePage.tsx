/** @jsx jsx */
import { jsx } from '@emotion/react'
import PagingTable from '../components/PagingTable'

interface ArticleInfo {
  id: number,
  title: string,
  createdTimestamp: number
}

const HomePage = () => (
  <div css={{
    padding: '60px 30px',
    width: '100%',
    height: '100%',
  }}>
    <PagingTable<ArticleInfo>
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
            }
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
            renderCell: (data) => (`${
                (new Date(data)).toLocaleDateString()
              } ${
                (new Date(data)).toLocaleTimeString()
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
        ]
      }}
      paginationProps={{
        currentPage: 1,
        finalPage: 100,
        onChange: (page) => {}
      }}
    />
  </div>
)

export default HomePage
