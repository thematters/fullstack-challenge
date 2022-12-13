import { FC } from 'react'

import { makeStyles } from '@mui/styles'
import Container from '@mui/material/Container'
import Header from './Header'
import Loading from './Loading'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    padding: '2rem',
  },
}))

const Layout: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Loading />
      <Header />
      <Container className={classes.root}>{children}</Container>
    </>
  )
}

export default Layout
