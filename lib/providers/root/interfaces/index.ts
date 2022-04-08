/* eslint-disable no-unused-vars */
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

export interface IRootHeaders {
  'x-access': string
  'x-refresh': string
}

export interface IRootContext {
  // access
  rootIsAccess: () => boolean
  rootReadAccess: () => string | undefined
  rootWriteAccess: (access: string) => void
  rootWriteAccessNull: () => void

  // refresh
  rootIsRefresh: () => boolean
  rootReadRefresh: () => Promise<string | null>
  rootWriteRefresh: (access: string) => Promise<void>
  rootWriteRefreshNull: () => void

  // apollo
  initApolloClient: () => ApolloClient<NormalizedCacheObject>
  hydrateApolloClient: () => Promise<ApolloClient<NormalizedCacheObject>>
}

export const __root_provider_initial__: IRootContext = {
  rootIsAccess: () => false,
  rootReadAccess: () => undefined,
  rootWriteAccess: (access: string) => {
    return access ? null : null
  },
  rootWriteAccessNull: () => {
    return
  },
  rootIsRefresh: () => false,
  rootReadRefresh: async () => null,
  rootWriteRefresh: async (access: string) => {
    access ? null : null
    return
  },
  rootWriteRefreshNull: () => {
    return
  },
  initApolloClient: () => {
    const link = new HttpLink({
      uri: `yay:)`,
      //headers: getAuthHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  },
  hydrateApolloClient: async () => {
    const link = new HttpLink({
      uri: `hello;)`,
      //headers: getAuthHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  },
}
