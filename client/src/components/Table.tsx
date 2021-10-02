/** @jsx jsx */
import { jsx, Interpolation, Theme } from '@emotion/react'

export interface Props<T> {
  columns: Array<{
    referencedDataPropertyName: keyof T,
    title: React.ReactNode,
    headCSS?: Interpolation<Theme>,
    cellCSS?: Interpolation<Theme>,
    renderCell?: (value: any, record: object) => React.ReactNode,
  }>,
  rowKey: ((record: object) => string) | keyof T,
  data: Array<T>,
}

export default function Table<T extends object>({ columns, rowKey, data }: Props<T>) {
  return (
    <table css={{ width: '100%' }}>
      <thead>
        <tr css={{ background: '#cdcdcd' }}>
          {columns.map(column => (
            <th
              key={`head-${column.referencedDataPropertyName}`}
              css={[{ padding: '8px', color: '#696969', }, column.headCSS]}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const key = typeof rowKey === 'function' ? rowKey(row) : row[rowKey];
          return (
            <tr
              key={`row-${key}`}
              css={{
                background: index % 2 === 1 ? '#eee' : 'none',
                '&:hover': { background: '#efefef' }
              }}
            >
              {columns.map(({ referencedDataPropertyName, cellCSS, renderCell }, index) => {
                const value = row[referencedDataPropertyName]
                return (
                  <td
                    key={`row-${key}-${index}`}
                    css={[{ padding: '8px', color: '#898989', }, cellCSS]}
                  >
                    {typeof renderCell === 'function' ? renderCell(value, row) : value}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
