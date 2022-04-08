/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

// root
import RootShape from './shapes/root/RootShape'

// -lib primary
import LibPrimaryEmailPhoneSubmissionShape from './shapes/lib/primary/LibPrimaryEmailPhoneSubmissionShape'

import LibMapDirectionsShape from './shapes/lib/primary/LibMapDirectionsShape'

// -f sign_up
import SignUpShape from './shapes/features/sign_up/SignUpShape'

// -f sign_in
import SignInShape from './shapes/features/sign_in/SignInShape'

// -s forgot_password
import ForgotPasswordShape from './shapes/features/screens/forgot_password/ForgotPasswordShape'

export function makeStore() {
  return configureStore({
    reducer: {
      // root
      RootShape,

      // -s forgot_password
      ForgotPasswordShape,

      // -lib primary
      LibPrimaryEmailPhoneSubmissionShape,

      LibMapDirectionsShape,

      // -f sign_up
      SignUpShape,

      // -f sign_in
      SignInShape,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
