/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { TypeNavigationRoot } from '../../types/navigation'

const linking: LinkingOptions<TypeNavigationRoot> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      MainPrimaryInitial: {
        screens: {
          Primary: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Secondary: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      OpenSignIn: 'sign-in',
      OpenSignUp: 'sign-up',
      OpenForgotPassword: 'forgot-password',
      OpenTermsAndConditions: 'terms-and-conditions',
      NotFound: '*',
    },
  },
}

export default linking
