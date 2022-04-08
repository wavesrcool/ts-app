/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import * as React from 'react'
import { useFold, useShape } from '../../../app/hooks'
import {
  ofRootShape,
  writeRootShapeValue,
  writeRootShapeValueUndef,
} from '../../../app/shapes/root/RootShape'

import { readSecureStore } from '../../functions/secure_store/readSecureStore'
import { writeSecureStore } from '../../functions/secure_store/writeSecureStore'
import {
  IRootContext,
  IRootHeaders,
  __root_provider_initial__,
} from './interfaces'

const RootContext = React.createContext<IRootContext>(__root_provider_initial__)

export function RootProvider({ children }: any): JSX.Element {
  const root = useProvideRoot()
  const [client, setClient] = React.useState<
    ApolloClient<NormalizedCacheObject>
  >(root.initApolloClient())

  React.useCallback(() => {
    const fun = async () => {
      const client = await root.hydrateApolloClient()
      setClient(client)
    }
    fun()
  }, [])

  return (
    <RootContext.Provider value={root}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </RootContext.Provider>
  )
}

export const useRoot = () => {
  return React.useContext(RootContext)
}

function useProvideRoot(): IRootContext {
  const fold = useFold()
  const shape = useShape(ofRootShape)

  const hydrateRootHeaders = async (): Promise<IRootHeaders | null> => {
    if (!shape.value) return null

    return {
      'x-access': shape.value,
      'x-refresh': `${await readSecureStore(`refresh`)}`,
    }
  }

  const rootIsAccess = () => {
    if (shape.value) {
      return true
    } else {
      return false
    }
  }

  /**
   *
   * read access from redux
   */
  const rootReadAccess = (): string | undefined => {
    return shape.value
  }

  /**
   *
   * write access to redux
   */
  const rootWriteAccess = (str: string): void => {
    fold(writeRootShapeValue(str))
  }

  /**
   * write null
   */
  const rootWriteAccessNull = (): void => {
    fold(writeRootShapeValueUndef())
  }

  const rootIsRefresh = () => {
    if (shape.value) {
      return true
    } else {
      return false
    }
  }

  const rootReadRefresh = async (): Promise<string | null> => {
    return await readSecureStore(`refresh`)
  }

  /**
   *
   * wrtie refresh to secure store
   */
  const rootWriteRefresh = async (refresh: string): Promise<void> => {
    await writeSecureStore(`refresh`, refresh)
  }

  const rootWriteRefreshNull = (): void => {
    fold(writeRootShapeValueUndef())
  }

  /*
  const rootWriteRefresh = async (refresh: string): Promise<void> => {
    try {
      console.log(`\n\n rootWriteRefresh\n`, refresh)
      await AsyncStorage.setItem('refresh', refresh)
    } catch (e) {
      console.log(`\nrootWriteRefresh ERROR\n`)
    }
    //fold(writeRootShapeRefresh(refresh))
  }

  const rootWriteRefreshNull = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('refresh')
    } catch (e) {
      console.log(`\nrootWriteRefreshNull ERROR\n`)
    }
    //fold(writeRootShapeRefreshNull())
  }

  const rootReadRefresh = async (): Promise<string | null> => {
    try {
      const ref = await AsyncStorage.getItem('refresh')
      console.log(`\nrootReadRefresh: ${ref}\n`)
      return ref
    } catch (e) {
      console.log(`\nrootWriteRefreshNull ERROR\n`)
      return null
    }
    //fold(writeRootShapeRefreshNull())
  }
  */

  const hydrateApolloClient = async () => {
    const link = new HttpLink({
      uri: process.env.APP_ROOT_APOLLO_ROOT_DOMAIN_URI,
      headers: await hydrateRootHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }

  const initApolloClient = () => {
    const link = new HttpLink({
      uri: process.env.APP_ROOT_APOLLO_ROOT_DOMAIN_URI,
      //headers: hydrateRootHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }

  /*
  const authRefresh = async ({ unique, key }: any) => {
    const client = hydrateApolloClient()

    const result = await client.mutate({
      mutation: _Flow0000Document,
      variables: {
        flow: { unique, key },
      },
    })

    console.log(result, `auth signin result`)

    if (result?.data?.flow__0000?.radical) {
      //setAuthToken(result.data.flow__0000.radical)
      fold(writeRootShapeAccess(result.data.flow__0000.radical))
    } else {
      fold(writeRootShapeAccessNull())
    }
  }
  */

  return {
    rootIsAccess,
    rootIsRefresh,
    rootReadAccess,
    rootReadRefresh,
    rootWriteAccess,
    rootWriteAccessNull,
    rootWriteRefresh,
    rootWriteRefreshNull,
    hydrateApolloClient,
    initApolloClient,
  }
}
