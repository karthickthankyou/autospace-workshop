'use client'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client'
import { ReactNode } from 'react'

export interface IApolloProviderProps {
  children: ReactNode
}

export const ApolloProvider = ({ children }: IApolloProviderProps) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  })
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
  return <Provider client={apolloClient}>{children}</Provider>
}
