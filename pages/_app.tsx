import 'bootstrap/dist/css/bootstrap.min.css'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import { apolloClient } from '@/lib/helpers/apolloClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
