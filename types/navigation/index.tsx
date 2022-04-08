/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationTypesMainPrimaryInitialScreenOriginTabs } from './main/MainPrimaryInitial'

declare global {
  namespace ReactNavigation {
    type RootParamsList = TypeNavigationRoot
  }
}

export type TypeNavigationRoot = {
  // Open Screen Definitions
  OpenInitial: undefined
  OpenSignIn: undefined
  OpenForgotPassword: undefined
  OpenSignUp: undefined
  OpenConfirmSms: undefined
  OpenConfirmEmail: undefined
  OpenTermsAndConditions: undefined

  // Main Screen Definitions
  MainPrimaryInitial:
    | NavigatorScreenParams<NavigationTypesMainPrimaryInitialScreenOriginTabs>
    | undefined
  NotFound: undefined
}

export type TypeNavigationRootOpts<Screen extends keyof TypeNavigationRoot> =
  NativeStackScreenProps<TypeNavigationRoot, Screen>
