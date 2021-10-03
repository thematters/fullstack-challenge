import React from 'react'
import { render } from 'react-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import 'normalize.css'
import Router from './pages'
import { NotificationProvider } from './components/Notification'

require('dotenv').config()

const client = new ApolloClient({
  uri: process.env.API_HOST,
  cache: new InMemoryCache()
});

const App = (): React.ReactElement => {
  return (
    <ApolloProvider client={client}>
      <NotificationProvider>
        <Router />
      </NotificationProvider>
    </ApolloProvider>
  )
}

render(<App />, document.getElementById('app'))
