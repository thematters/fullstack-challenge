/** @jsx jsx */
import { jsx } from '@emotion/react'
import Pagination from '../components/Pagination'

const HomePage = () => (
  <div css={{
    padding: '60px 30px',
    width: '100%',
    height: '100%',
  }}>
    <Pagination currentPage={1} finalPage={100} />
    <br />
    <Pagination currentPage={2} finalPage={100} />
    <br />
    <Pagination currentPage={3} finalPage={100} />
    <br />
    <Pagination currentPage={4} finalPage={100} />
    <br />
    <Pagination currentPage={5} finalPage={100} />
    <br />
    <Pagination currentPage={6} finalPage={100} />
    <br />
    <Pagination currentPage={98} finalPage={100} />
    <br />
    <Pagination currentPage={99} finalPage={100} />
    <br />
    <Pagination currentPage={100} finalPage={100} />
    <br />
    <Pagination currentPage={1} finalPage={1} />
    <br />
    <Pagination currentPage={1} finalPage={2} />
    <br />
    <Pagination currentPage={1} finalPage={3} />
    <br />
    <Pagination currentPage={1} finalPage={4} />
    <br />
    <Pagination currentPage={1} finalPage={5} />
    <br />
  </div>
)

export default HomePage
