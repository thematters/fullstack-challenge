/** @jsx jsx */
import { jsx } from '@emotion/react'
import Table, { Props as TableProps } from './Table'
import Pagination, { Props as PaginationProps } from './Pagination'
import NoData from './NoData'
import Loading from './Loading'
import React from 'react'

interface Props<T> {
  tableProp: TableProps<T>,
  paginationProps: PaginationProps,
  isLoading?: boolean,
}

export default function PagingTable<T extends object>({ tableProp, paginationProps, isLoading }: Props<T>) {
  return (
    <div css={{ width: '100%' }}>
      {isLoading ? (
        <div css={{ width: '100%', height: '300px' }}>
          <Loading
            containerCss={{ height: '100%' }}
            imageCss={{ width: '150px' }}
          />
        </div>
      ) : (
        tableProp.data.length !== 0 ? (
          <React.Fragment>
            <Table {...tableProp} />
            <div css={{ textAlign: 'right', padding: '8px' }}>
              <Pagination {...paginationProps} />
            </div>
          </React.Fragment>
        ) : (
          <div css={{ width: '100%', height: '300px' }}>
            <NoData
              containerCss={{ height: '100%' }}
              imageCss={{ width: '150px' }}
            />
          </div>
        )
      )}
    </div>
  )
}
