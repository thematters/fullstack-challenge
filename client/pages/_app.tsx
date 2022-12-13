import type { AppProps } from 'next/app'

import Layout from '@components/Layout'
import { theme } from '@configs/theme'
import { WalletProvider } from '@context/wallet'

import '@styles/globals.css'
import { ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </WalletProvider>
  )
}

export default MyApp
