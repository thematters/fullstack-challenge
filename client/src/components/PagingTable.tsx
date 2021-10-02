/** @jsx jsx */
import { jsx, Interpolation, Theme, css } from '@emotion/react'
import Table, { Props as TableProps } from './Table'
import Pagination, { Props as PaginationProps } from './Pagination'

interface Props<T> {
  tableProp: TableProps<T>,
  paginationProps: PaginationProps,
}

export default function PagingTable<T extends object>({ tableProp, paginationProps }: Props<T>) {
  return (
    <div>
      <Table {...tableProp} />
      <div css={{ textAlign: 'right', padding: '8px' }}>
        <Pagination {...paginationProps} />
      </div>
    </div>
  )
}
