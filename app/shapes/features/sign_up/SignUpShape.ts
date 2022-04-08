import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../../store'

interface IPayloadWriteSignUpShapeValuePassTrue {
  value: string
  type: `phone` | `email`
}

/**
 * interface: state.value
 */
interface IStateValueSignUpShape {
  loading: boolean
  error: boolean
  message: string | undefined
  value: string
  value_pass: boolean
  value_type: `phone` | `email` | undefined
  passphrase: string
  passphrase_pass: boolean
  passphrase_show: boolean

  //confirm_email: boolean
  confirm_email_code: string
  confirm_email_code_pass: boolean
}

/**
 * interface: state
 */
interface IStateSignUpShape {
  value: IStateValueSignUpShape
}

/**
 * state: initial
 */
const initialState: IStateSignUpShape = {
  value: {
    loading: false,
    error: false,
    message: undefined,
    value: ``,
    value_pass: false,
    value_type: undefined,
    passphrase: ``,
    passphrase_pass: false,
    passphrase_show: false,

    //
    //confirm_email: false,
    confirm_email_code: ``,
    confirm_email_code_pass: false,
  },
}

/**
 * reducers
 */
export const SignUpShapeSlice = createSlice({
  name: 'SignUpShape',
  initialState,
  reducers: {
    initSignUpShape: (state) => {
      state.value = {
        loading: false,
        error: false,
        message: undefined,
        value: ``,
        value_pass: false,
        value_type: undefined,
        passphrase: ``,
        passphrase_pass: false,
        passphrase_show: false,

        //
        //confirm_email: false,
        confirm_email_code: ``,
        confirm_email_code_pass: false,
      }
    },

    writeSignUpShapeLoadingTrue: (state) => {
      state.value = {
        ...state.value,
        loading: true,
      }
    },

    writeSignUpShapeLoadingFalse: (state) => {
      state.value = {
        ...state.value,
        loading: false,
      }
    },

    writeSignUpShapeErrorTrue: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        error: true,
        message: action.payload,
      }
    },

    writeSignUpShapeErrorFalse: (state) => {
      state.value = {
        ...state.value,
        error: false,
        message: undefined,
      }
    },

    /**
     * lib
     */
    writeSignUpShapeValuePassTrue: (
      state,
      action: PayloadAction<IPayloadWriteSignUpShapeValuePassTrue>
    ) => {
      state.value = {
        ...state.value,

        value: action.payload.value,
        value_pass: true,
        value_type: action.payload.type,
      }
    },

    writeSignUpShapeValuePassFalse: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,

        value: action.payload,
        value_pass: false,
        value_type: undefined,
      }
    },

    writeSignUpShapePassphrasePassTrue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,

        passphrase: action.payload,
        passphrase_pass: true,
      }
    },

    writeSignUpShapePassphrasePassFalse: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,

        passphrase: action.payload,
        passphrase_pass: false,
      }
    },

    writeSignUpShapePassphraseShowTrue: (state) => {
      state.value = {
        ...state.value,
        passphrase_show: true,
      }
    },

    writeSignUpShapePassphraseShowFalse: (state) => {
      state.value = {
        ...state.value,
        passphrase_show: false,
      }
    },

    /*
    writeSignUpShapeConfirmEmailTrue: (state) => {
      state.value = {
        ...state.value,
        confirm_email: true,
      }
    },

    writeSignUpShapeConfirmEmailFalse: (state) => {
      state.value = {
        ...state.value,
        confirm_email: false,
      }
    },
    */

    writeSignUpShapeConfirmEmailCodePassTrue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,

        confirm_email_code: action.payload,
        confirm_email_code_pass: true,
      }
    },

    writeSignUpShapeConfirmEmailCodePassFalse: (
      state,
      action: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,

        confirm_email_code: action.payload,
        confirm_email_code_pass: false,
      }
    },
  },
})

export const {
  initSignUpShape,
  writeSignUpShapeLoadingTrue,
  writeSignUpShapeLoadingFalse,
  writeSignUpShapeErrorTrue,
  writeSignUpShapeErrorFalse,
  //
  writeSignUpShapeValuePassFalse,
  writeSignUpShapeValuePassTrue,
  writeSignUpShapePassphrasePassFalse,
  writeSignUpShapePassphrasePassTrue,
  writeSignUpShapePassphraseShowFalse,
  writeSignUpShapePassphraseShowTrue,
  writeSignUpShapeConfirmEmailCodePassFalse,
  writeSignUpShapeConfirmEmailCodePassTrue,
} = SignUpShapeSlice.actions

export const ofSignUpShape = (state: AppState): IStateValueSignUpShape =>
  state.SignUpShape.value
export default SignUpShapeSlice.reducer
