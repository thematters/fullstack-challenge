import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinearProgress from '@mui/material/LinearProgress'

const Loading: FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
  }, [router.events])

  return <>{loading && <LinearProgress sx={{ position: 'fixed', right: 0, left: 0 }} />}</>
}

export default Loading
