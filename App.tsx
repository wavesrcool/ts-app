import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { NativeBaseProvider } from 'native-base'
import store from './app/store'
import { theme } from './theme'
import RootOrigin from './features/origins/root/RootOrigin'
import AppLoading from 'expo-app-loading'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { LogBox } from 'react-native'
import useCachedResources from './lib/hooks/useCachedResources'

// @option-check
LogBox.ignoreAllLogs()

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  const uri = process.env.APP_ROOT_APOLLO_ROOT_DOMAIN_URI || `yay`

  if (!uri) throw new Error(`App.tsx: no uri for apollo`)
  const link = new HttpLink({
    uri,
  })

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}

export default function App(): JSX.Element {
  const isLoadingComplete = useCachedResources()

  return isLoadingComplete ? (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <ApolloProvider client={createApolloClient()}>
            <StatusBar
              networkActivityIndicatorVisible={false}
              hideTransitionAnimation={`fade`}
              translucent={true}
            />
            <RootOrigin />
          </ApolloProvider>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  ) : (
    <AppLoading />
  )
}

/*



*/
