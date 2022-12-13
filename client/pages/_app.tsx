import type { AppProps } from 'next/app'

import Layout from '@components/Layout'
import { theme } from '@configs/theme'
import { WalletProvider } from '@context/wallet'

import '@styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from '@components/Snackbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </ThemeProvider>
    </WalletProvider>
  )
}

export default MyApp
