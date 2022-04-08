import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useColorModeValue } from 'native-base'
import * as React from 'react'
import { useFold, useShape } from '../../../app/hooks'
import { initRootShape, ofRootShape } from '../../../app/shapes/root/RootShape'
import linking from '../../../lib/navigation/linking'
import { TypeNavigationRoot } from '../../../types/navigation'
import MainPrimaryInitialScreenOrigin from '../../screens/main/primary/initial/MainPrimaryInitialScreenOrigin'
import OpenConfirmEmailScreenOrigin from '../../screens/open/confirm_email/OpenConfirmEmailScreenOrigin'
import OpenConfirmSmsScreenOrigin from '../../screens/open/confirm_sms/OpenConfirmSmsScreenOrigin'
import OpenForgotPasswordScreenOrigin from '../../screens/open/forgot_password/OpenForgotPasswordScreenOrigin'
import OpenInitialScreenOrigin from '../../screens/open/initial/OpenInitialScreenOrigin'
import OpenSignInScreenOrigin from '../../screens/open/sign_in/OpenSignInScreenOrigin'
import OpenSignUpScreenOrigin from '../../screens/open/sign_up/OpenSignUpScreenOrigin'
import OpenTermsConditionsScreenOrigin from '../../screens/open/terms_conditions/OpenTermsConditionsScreenOrigin'

const NavigationRoot = createNativeStackNavigator<TypeNavigationRoot>()

export default function RootOrigin(): JSX.Element {
  console.log('*functional* RootOrigin ')

  const shape = useShape(ofRootShape)

  const fold = useFold()

  React.useEffect(() => {
    fold(initRootShape())
  }, [fold])

  return (
    <NavigationContainer
      linking={linking}
      theme={useColorModeValue(DefaultTheme, DarkTheme)}
    >
      <NavigationRoot.Navigator>
        {shape.open ? (
          <>
            <NavigationRoot.Screen
              name="OpenInitial"
              component={OpenInitialScreenOrigin}
              options={{ headerShown: false }}
            />

            <NavigationRoot.Screen
              name="OpenSignIn"
              component={OpenSignInScreenOrigin}
              options={{ headerShown: false }}
            />

            <NavigationRoot.Screen
              name="OpenSignUp"
              component={OpenSignUpScreenOrigin}
              options={{ headerShown: false }}
            />

            <NavigationRoot.Screen
              name="OpenForgotPassword"
              component={OpenForgotPasswordScreenOrigin}
              options={{ headerShown: false }}
            />

            {shape.confirm_email ? (
              <NavigationRoot.Screen
                name="OpenConfirmEmail"
                component={OpenConfirmEmailScreenOrigin}
                options={{ headerShown: false }}
              />
            ) : null}

            {shape.confirm_sms ? (
              <NavigationRoot.Screen
                name="OpenConfirmSms"
                component={OpenConfirmSmsScreenOrigin}
                options={{ headerShown: false }}
              />
            ) : null}

            <NavigationRoot.Group screenOptions={{ presentation: 'modal' }}>
              <NavigationRoot.Screen
                name="OpenTermsAndConditions"
                component={OpenTermsConditionsScreenOrigin}
              />
            </NavigationRoot.Group>
          </>
        ) : (
          <>
            <NavigationRoot.Screen
              name="MainPrimaryInitial"
              component={MainPrimaryInitialScreenOrigin}
              options={{ headerShown: false }}
            />

            <NavigationRoot.Screen
              name="NotFound"
              component={OpenConfirmEmailScreenOrigin}
              options={{ title: 'Oops!' }}
            />
          </>
        )}
      </NavigationRoot.Navigator>
    </NavigationContainer>
  )
}

/*

*/
