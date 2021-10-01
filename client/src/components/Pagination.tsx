/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

const LeftLink = styled.a`
  padding: 8px;
  background: white;
  cursor: pointer;
  color: blue;
  &::after {
    content: '<';
    display: block;
  }
  &:hover {
    color: lightblue;
  }
`
const RightLink = styled.a`
  padding: 8px;
  text-align: center;
  background: white;
  cursor: pointer;
  &::after {
    content: '>';
    display: block;
  }
  color: blue;
  &:hover {
    color: lightblue;
  }
`
const PageLink = styled.a`
  padding: 8px;
  text-align: center;
  background: white;
  cursor: pointer;
  color: blue;
  &:hover {
    color: lightblue;
  }
`
const AbbreviationBlock = styled.a`
  padding: 8px;
  text-align: center;
  background: white;
`

interface Props {
  currentPage: number,
  finalPage: number,
  getHref?: (page: number) => string
  onChange: (page: number) => void
}

// 
const Pagination = ({ currentPage, finalPage, getHref, onChange }: Props) => {
  const needAbbreviation = finalPage >= 5;
  let pages: Array<'...'|number>;
  if (!needAbbreviation) {
    pages = Array.from({ length: finalPage }).map((_, index) => index + 1);
  } else if (1 <= currentPage && currentPage < 4) {
    pages = [1, 2, 3, '...', finalPage];
  } else if (finalPage - 3 < currentPage && currentPage <= finalPage) {
    pages = [1, '...', finalPage - 2, finalPage - 1, finalPage];
  } else {
    pages = [1, '...', currentPage -1, currentPage, currentPage + 1, '...', finalPage];
  }

  return (
    <div css={{ display: 'inline-flex' }}>
      {needAbbreviation && (pages.length !== 5 || pages[1] === '...') && (
        <LeftLink
          onClick={() => onChange(currentPage - 1)}
          {...(getHref ? { href: getHref(currentPage - 1) } : {})}
        />
      )}
      {pages
        .map((page, index) => {
          if (page === '...') {
            return needAbbreviation && (
              <AbbreviationBlock key={page + index}>...</AbbreviationBlock>
            )
          } else {
            return (
              <PageLink
                key={page + index}
                onClick={() => onChange(page)}
                css={currentPage === page && css`color: red;`}
                {...(getHref ? { href: getHref(page) } : {})}
              >
                {page}
              </PageLink>
            )
          }
        })
      }
      {needAbbreviation && (pages.length !== 5 || pages[1] !== '...') && (
        <RightLink
          onClick={() => onChange(currentPage + 1)}
          {...(getHref ? { href: getHref(currentPage + 1) } : {})}
        />
      )}
    </div>
  )
}

export default Pagination
