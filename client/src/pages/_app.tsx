

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from "@apollo/client";

import { createClient, defaultChains, Provider } from 'wagmi'

import { client } from "../graphql/client";

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const chains = defaultChains;


// const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
//     alchemyProvider({ alchemyId }),
//     publicProvider(),
//   ])

const walletClient = createClient({
    autoConnect: true,
    connectors: [
      new InjectedConnector({
        chains,
        options: {
          name: 'MetaMask',
          shimDisconnect: true,
        },
      }),      
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
    ],
    // provider
  })



export default function BlogApp({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={client}>
    <ChakraProvider>
      <Provider client={walletClient}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  </ApolloProvider>
  );
}