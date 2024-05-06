'use client'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client'
import { ReactNode } from 'react'
import { setContext } from '@apollo/client/link/context'

export interface IApolloProviderProps {
  children: ReactNode
}

export const ApolloProvider = ({ children }: IApolloProviderProps) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  })

  const authLink = setContext(async (_, { headers }) => {
    const token = await fetch('/api/auth/token').then((res) => res.json())

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
  return <Provider client={apolloClient}>{children}</Provider>
}
